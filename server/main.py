from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn

# 1. Define the AI logic (or import from ai.py)
from ai import get_recipe_from_gemini

app = FastAPI()

# 2. Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this for production
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Define the Request Body Schema
class IngredientRequest(BaseModel):
    ingredients: List[str]

@app.post("/api/recipe")
async def create_recipe(request: IngredientRequest):
    # Pydantic automatically handles the "is array" and "exists" check
    try:
        recipe = await get_recipe_from_gemini(request.ingredients)
        return {"recipe": recipe}
    except Exception as e:
        print(f"Server error: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate recipe")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)