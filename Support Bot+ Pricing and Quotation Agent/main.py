import logging
import re
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import ChatInput, ChatOutput 
from rag_engine import translate_and_normalize, find_best_match, calculate_quote, finalize_response, evaluate_offer

# 1. Setup Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="AztroSys AI Agent")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat", response_model=ChatOutput)
async def chat_endpoint(request: ChatInput):
    logger.info(f"Received request: {request.message}")

    # --- STEP 1: ROUTING ---
    routing = translate_and_normalize(request.message)
    # The 'detected_language' will now be "Punjabi" or "Urdu"
    user_lang = routing.get('detected_language', 'English')
    
    # --- STEP 2: DATA RETRIEVAL ---
    quote_check = calculate_quote(routing.get('english_query', ''))
    
    if quote_check:
        base_answer = quote_check
        intent = "quotation"
    else:
        faq_entry = find_best_match(routing)
        if faq_entry:
            base_answer = faq_entry['answer']
            intent = "general_info"
        else:
            base_answer = "I'm sorry, I don't have that specific information. Please contact our support team."
            intent = "human_handoff"

    # --- STEP 3: FINALIZE ---
    # We pass 'user_lang' (e.g., "Punjabi") so the offline fallback knows what to do
    final_text = finalize_response(base_answer, user_lang)
    
    logger.info(f"Response sent. Intent: {intent} | Lang: {user_lang}")

    return ChatOutput(
        response_text=final_text,
        intent=intent,
        confidence_score=1.0, 
        suggested_actions=["Contact Support"] if intent == "human_handoff" else []
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)