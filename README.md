# 👨‍🍳 Chef Claude - AI Recipe Generator

Chef Claude is a full-stack application that helps users decide what to cook based on the ingredients they already have. The app features a modern React frontend and a secure Express.js backend that interfaces with the Hugging Face Inference API to generate creative recipes.

## 🚀 Features
- **Smart Pantry:** Add and manage a list of ingredients in real-time.
- **AI-Generated Recipes:** Get custom recipes from Large Language Models (LLMs) once you have at least 4 ingredients.
- **Secure Architecture:** API keys are stored on the server side to prevent exposure in the browser.
- **Markdown Support:** Recipes are beautifully formatted using `react-markdown`.
- **Fast Development:** Built with Vite for instant Hot Module Replacement (HMR).

---

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **Vite**
- **React-Markdown** (for recipe rendering)

### Backend
- **Node.js & Express.js**
- **@huggingface/inference** (for AI model interaction)
- **Cors** (to enable cross-origin communication)
- **Dotenv** (for environment variable management)

---

## 📂 Project Structure
<<<<<<< HEAD
'''text
chef-claude/
├── client/           # React + Vite Frontend
│   ├── src/
│   └── package.json
└── server/           # Express.js Backend
    ├── index.js      # Main server logic
    ├── .env          # API Keys (Git ignored)
    └── package.json
=======

-chef-claude/
- ├── client/           # React + Vite Frontend
- └── server/           # Express.js Backend


>>>>>>> 1146394827f00109d6768d4c817723d6385b40f8
---

## 📦 Installation & Setup

### 1. Clone the repository

Bash

```
git clone [https://github.com/Soaham-47/first-react.git](https://github.com/Soaham-47/first-react.git)
cd client

```

### 2. Backend Setup

Navigate to the server folder and install dependencies:

Bash

```
cd server
npm install

```

Create a `.env` file in the server directory:

Code snippet

```
PORT=5000
HF_ACCESS_TOKEN=your_huggingface_api_key_here

```

Start the server:

Bash

```
node index.js

```

### 3. Frontend Setup

Open a new terminal, navigate to the client folder, and install dependencies:

Bash

```
cd client
npm install

```

Start the development server:

Bash

```
npm run dev

```

----------

## 📝 Usage

1.  **Open the app** in your browser (usually [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173)).
    
2.  **Type an ingredient** (e.g., "Chicken") and click **+ Add ingredient**.
    
3.  **Add more items:** Once you have **at least 4 ingredients**, the "Get a recipe" button will appear.
    
4.  **Generate:** Click the button and wait for Chef Claude to generate your meal plan!
