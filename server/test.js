//this file is mainly for testing and debugging
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent("Explain how AI works in a few words");

  console.log(result.response.text());
}

main();

//seperate testing point
// Add this test endpoint to index.js
app.get("/api/test", async (req, res) => {
  try {
    const recipe = await getRecipeFromGemini(["chicken", "rice", "garlic"]);
    res.json({ success: true, recipe });
  } catch (err) {
    res.status(500).json({ error: err.message, details: err });
  }
});