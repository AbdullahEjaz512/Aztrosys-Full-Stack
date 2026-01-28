import os
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

print(f"🔑 Testing Key: {API_KEY[:6]}...{API_KEY[-4:]}")

# Test 3 different model names to see which one works
models_to_test = [
    "gemini-1.5-flash",
    "gemini-pro", 
    "gemini-1.5-pro-latest"
]

found_working = False

for model in models_to_test:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={API_KEY}"
    print(f"\n📡 Testing Model: {model}...")
    
    try:
        response = requests.post(
            url,
            headers={'Content-Type': 'application/json'},
            json={"contents": [{"parts": [{"text": "Hello"}]}]},
            timeout=5
        )
        
        if response.status_code == 200:
            print(f"✅ SUCCESS! Model '{model}' is working.")
            print(f"RESPONSE: {response.json()['candidates'][0]['content']['parts'][0]['text']}")
            found_working = True
            break
        else:
            print(f"❌ FAILED ({response.status_code}): {response.text}")
    except Exception as e:
        print(f"⚠️ NETWORK ERROR: {e}")

if not found_working:
    print("\n❌ ALL MODELS FAILED. Check your API Key or Billing Account.")