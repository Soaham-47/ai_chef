# 👨‍🍳 Chef Claude - AI Recipe Generator

Chef Claude is a full-stack application that helps users decide what to cook based on the ingredients they already have. The app features a modern React frontend and a secure FastAPI backend that interfaces with the Gemini 2.5 Flash model to generate creative recipes.

## 🚀 Features
- Smart Pantry: Add and manage a list of ingredients in real-time.  
- AI-Generated Recipes: Get custom recipes from Large Language Models (LLMs) once you have at least 4 ingredients.  
- Secure Architecture: API keys are stored on the backend to prevent exposure in the browser.  
- Markdown Support: Recipes are beautifully formatted using react-markdown.  
- Fast Development: Built with Vite for instant Hot Module Replacement (HMR).  

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- React-Markdown

### Backend
- Python (FastAPI)
- Uvicorn (ASGI server)
- Gemini 2.5 Flash (Google AI)
- Python-dotenv
- CORS Middleware (FastAPI)
- uv (fast Python package manager)

---

## 📂 Project Structure

chef-claude/
├── client/              # React + Vite Frontend
│   ├── src/
│   └── package.json
└── server/              # FastAPI Backend
    ├── main.py          # FastAPI app entry point
    ├── .env             # API Keys (Git ignored)
    ├── pyproject.toml   # Managed by uv

---

## 📦 Installation & Setup

### 1. Clone the repository

git clone https://github.com/Soaham-47/ai_chef.git 
cd ai_chef_project

---

### 2. Backend Setup (FastAPI + uv)

cd server

# Create virtual environment
uv venv

# Activate environment
source .venv/bin/activate   # Mac/Linux  
.venv\Scripts\activate      # Windows  

# Install dependencies
uv pip install -r requirements.txt

Create a .env file:

PORT=8000  
GEMINI_API_KEY=your_gemini_api_key_here  

Run the FastAPI server:

uvicorn main:app --reload  

---

### 3. Frontend Setup

cd client  
npm install  
npm run dev  

---

## 📝 Usage

1. Open the app in your browser (usually http://localhost:5173)  
2. Type an ingredient (e.g., "Chicken") and click + Add ingredient  
3. Add at least 4 ingredients  
4. Click Get a recipe and generate your meal  