import json
import os
import re
import requests
from dotenv import load_dotenv

load_dotenv()

# --- CONFIGURATION ---
API_KEY = os.getenv("GEMINI_API_KEY")
# Using standard v1 endpoint (Check if your key works with this, else swap back to v1beta)
API_URL = f"https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key={API_KEY}"

def call_gemini_api(prompt_text):
    """Direct HTTP call. Safe, Stateless, and Robust."""
    headers = {'Content-Type': 'application/json'}
    data = {"contents": [{"parts": [{"text": prompt_text}]}]}
    try:
        response = requests.post(API_URL, headers=headers, json=data, timeout=15)
        if response.status_code == 200:
            return response.json()['candidates'][0]['content']['parts'][0]['text']
        else:
            print(f"⚠️ API ERROR: {response.status_code} | {response.text}")
    except Exception as e: 
        print(f"⚠️ NETWORK ERROR: {e}")
    return None

def load_json(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []

knowledge_base = load_json('knowledge_base.json')
pricing_data = load_json('pricing_matrix.json')

def translate_and_normalize(user_query):
    """
    UNIVERSAL ROUTER: Smart Language Detection + VIP Lanes
    """
    q_low = user_query.lower()
    
    # --- FIX: USE REGEX FOR WHOLE WORD MATCHING ---
    # This prevents "aur" matching "dinosaur" or "hai" matching "chair"
    
    def check_keywords(text, keywords):
        # Creates a regex pattern like: \b(tusi|sade|karde)\b
        pattern = r'\b(' + '|'.join(map(re.escape, keywords)) + r')\b'
        return bool(re.search(pattern, text))

    punjabi_kw = ["tusi", "sade", "karde", "asi", "kiddan", "kinne", "si", "san"]
    urdu_kw = ["kya", "hai", "banatay", "muhaiya", "kaam", "aur", "mein", "intekhab", "purani", "chunoon", "hum", "ap"]

    is_punjabi = check_keywords(q_low, punjabi_kw)
    is_urdu = check_keywords(q_low, urdu_kw)
    
    # Strict Priority
    lang_hint = "English"
    if is_punjabi: lang_hint = "Punjabi"
    elif is_urdu: lang_hint = "Urdu"

    base_response = {
        "match_type": "none", 
        "detected_language": "Auto",
        "lang_hint": lang_hint,
        "english_query": user_query 
    }

    # --- LEVEL 1: THE VIP LANE ---

    # 1. COMPOUND INTENT (History + Why)
    history_kw = ["history", "old", "established", "founded", "2010", "purani", "kab", "der", "saal"]
    why_kw = ["why", "choose", "benefit", "best", "fayda", "kyun", "waja", "intekhab", "chunoon"]
    
    # Check if BOTH types of keywords exist
    if any(x in q_low for x in history_kw) and any(y in q_low for y in why_kw):
        return {**base_response, "match_type": "faq", "match_text": "COMPOUND_HISTORY_WHY"}

    # 2. CYBERSECURITY
    if any(x in q_low for x in ["hacker", "hacking", "security", "cyber", "protect", "steal", "breach", "virus", "malware"]):
        return {**base_response, "match_type": "faq", "match_text": "What cybersecurity services do you provide?"}

    # 3. AI & DATA SCIENCE
    if re.search(r'\bai\b', q_low) or any(x in q_low for x in ["data science", "machine learning", "analytics"]):
        return {**base_response, "match_type": "faq", "match_text": "Do you offer Data Science or AI services?"}

    # 4. DEFINITION / HISTORY
    if any(x in q_low for x in ["aztrosys", "company"]): 
        if any(t in q_low for t in ["what", "who", "kya", "que", "history", "kab", "when", "kidon"]):
             if "ceo" not in q_low:
                 return {**base_response, "match_type": "faq", "match_text": "What is AztroSys?"}

    # 5. LOCATION
    if any(x in q_low for x in ["meeting", "visit", "drop by", "office", "location", "address", "where", "kahan", "kithe"]):
        return {**base_response, "match_type": "faq", "match_text": "Where is your office located?"}

    # 6. CEO
    if any(x in q_low for x in ["ceo", "owner", "boss", "head", "malik", "sarbarah", "chief"]):
        return {**base_response, "match_type": "faq", "match_text": "Who is the CEO of AztroSys?"}

    # 7. SOFTWARE + DEVOPS
    software_kw = ["software", "development", "web", "app", "coding", "site", "banatay", "devops", "cloud", "aws", "ci/cd"]
    if any(x in q_low for x in software_kw):
        if "devops" in q_low or "ci/cd" in q_low:
             return {**base_response, "match_type": "faq", "match_text": "Do you offer DevOps services?"}
        return {**base_response, "match_type": "faq", "match_text": "What software development services do you offer?"}

    # --- LEVEL 2: SEMANTIC ROUTER ---
    kb_index_str = "\n".join([f"{i}: {entry['question']}" for i, entry in enumerate(knowledge_base)])
    prompt = f"""
    Available Topics:
    {kb_index_str}
    
    User Query: "{user_query}"
    Identify the best matching Topic ID. Output JSON ONLY: {{ "match_id": <int> }}
    """
    
    ai_response = call_gemini_api(prompt)
    if ai_response:
        try:
            clean_text = ai_response.replace("```json", "").replace("```", "").strip()
            data = json.loads(clean_text)
            idx = data.get("match_id", -1)
            if isinstance(idx, int) and 0 <= idx < len(knowledge_base):
                return {
                    **base_response,
                    "match_type": "faq",
                    "match_text": knowledge_base[idx]['question']
                }
        except: pass
            
    return base_response

def find_best_match(routing_data):
    if routing_data.get("match_type") != "faq":
        return None
    
    target_text = routing_data.get("match_text", "")

    if target_text == "COMPOUND_HISTORY_WHY":
        ans_history = "AztroSys is a leading technology provider established in 2010."
        ans_why = "You should choose us because we have served over 5,000 clients with a 100% satisfaction rate."
        return {"question": "Compound Question", "answer": f"{ans_history} {ans_why}"}
    
    for entry in knowledge_base:
        if entry['question'].strip().lower() == target_text.strip().lower():
            return entry
    return None

def finalize_response(english_response, detected_language):
    """
    Context-Aware Translation Layer.
    """
    current_year = 2026
    
    # Hint Logic
    hint = "English"
    if isinstance(detected_language, str) and detected_language in ["Urdu", "Punjabi"]:
         hint = detected_language
    
    is_pricing = "$" in english_response or "Est Price" in english_response

    # 1. AI TRANSLATION
    # If API is alive, we let AI detect the language unless we provided a STRONG hint
    if hint != "English":
        target_instr = f"Translate to {hint} (Roman Script)."
    else:
        target_instr = "Reply in the same language as the Input. If Input is English, keep English."

    prompt = f"""
    Role: Support Agent.
    Current Year: {current_year}.
    Input: "{english_response}"
    Task: {target_instr}
    Note: Keep prices/numbers unchanged.
    """
    
    ai_text = call_gemini_api(prompt)
    if ai_text:
        return ai_text.strip()
        
    # 2. OFFLINE FALLBACKS
    if hint == "Punjabi":
        if is_pricing: return english_response.replace("We can offer", "Asi pesh kar sakde aan").replace("Est Price", "Andazan Qeemat")
        if "Data Science" in english_response: return "Ji haan, asi Data Science te AI da kam karde aan."
        if "2010" in english_response: return "AztroSys 2010 vich bani si. (Offline Mode)"
        if "DevOps" in english_response: return "Ji haan, asi DevOps services provide karde aan."

    if hint == "Urdu":
        if "satisfaction rate" in english_response and "2010" in english_response:
             return "AztroSys 2010 mein qaim hui thi (16 saal pehlay). Apko humein is liye chunna chahiye kyunke humaray paas 5000+ satisfied clients hain. (Offline Mode)"
        if is_pricing: return english_response.replace("We can offer", "Hum pesh kar saktay hain").replace("Est Price", "Andazan Qeemat")
        if "Data Science" in english_response: return "Ji haan, hum Data Science aur AI ki khidmat muhaiya karte hain."
        if "2010" in english_response: return "AztroSys 2010 mein qaim hui thi. (Offline Mode)"
        if "DevOps" in english_response: return "Ji haan, hum DevOps services provide karte hain."

    return english_response

def calculate_quote(english_query):
    if not english_query: return None
    q_low = english_query.lower()
    total = 0
    services = []
    
    for s in pricing_data.get("services", []):
        if any(k in q_low for k in s.get('keywords', [])):
            services.append(s['name'])
            total += s['base_price']
            
    if not services: return None
    return f"We can offer {', '.join(services)}. Est Price: ${total}."

def evaluate_offer(user_offer_str, ai_estimate):
    try:
        numbers = re.findall(r'\d+', user_offer_str)
        if not numbers: return "unknown"
        return "tentative_approval" if float(numbers[0]) >= (ai_estimate * 0.85) else "reject_lowball"
    except: return "error"