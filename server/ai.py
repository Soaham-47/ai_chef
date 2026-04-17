import os
from google import genai
from dotenv import load_dotenv
from tenacity import retry, stop_after_attempt, wait_exponential

# Load API Key from .env
load_dotenv()

# Initialize the Gemini Client
# Using the modern 2026 SDK syntax
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

SYSTEM_PROMPT = """
You are a professional chef assistant. You receive a list of ingredients 
and suggest a creative recipe. You don't need to use every ingredient. 
The recipe can include basic pantry staples (salt, oil, water). 
Format the entire response in clean Markdown.
"""

# The @retry decorator handles those '503 Unavailable' errors automatically
# It will try 3 times, waiting a bit longer between each try (1s, 2s, 4s)
@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=6))
async def get_recipe_from_gemini(ingredients_arr):
    ingredients_string = ", ".join(ingredients_arr)
    
    try:
        # Use 2.5-flash for the best balance of speed and availability
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=f"User ingredients: {ingredients_string}",
            config={
                'system_instruction': SYSTEM_PROMPT,
                'temperature': 0.7, # Adds a bit of creativity to the recipes
            }
        )

        if not response.text:
            raise ValueError("Gemini returned an empty response.")

        return response.text

    except Exception as e:
        # This will be caught by @retry if it's a transient error (like 503)
        # Or logged here if it's a permanent error
        print(f"[AI Error]: {e}")
        raise e