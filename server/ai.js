import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients a user has and suggests a recipe
they could make with some or all of those ingredients. You don't need to use every ingredient
they mention. The recipe can include a few extra ingredients if needed. 
Format the response in markdown for easy display on a web page.
`;

export async function getRecipeFromGemini(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
${SYSTEM_PROMPT}

User ingredients: ${ingredientsString}

Please generate a recipe using some or all of these ingredients.
`;

    const result = await model.generateContent(prompt);

    // Gemini returns a rich object; extract text like this:
    return result.response.text();

  } catch (error) {
    console.error("Error fetching recipe:", error);
    return "Sorry, I couldn't generate a recipe right now. Please try again!";
  }
}
