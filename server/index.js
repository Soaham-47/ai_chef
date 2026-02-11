import express from "express";
import cors from "cors";
import { getRecipeFromGemini } from "./ai.js"; // ⬅️ Import your AI logic

const app = express();
app.use(cors());
app.use(express.json());

// Route that calls your AI function
app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Ingredients must be an array" });
  }

  try {
    const recipe = await getRecipeFromGemini(ingredients);
    res.json({ recipe });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
