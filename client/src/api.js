export async function getRecipeFromBackend(ingredientsArr) {
  try {
    const response = await fetch("http://localhost:5000/api/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    if (!response.ok) {
      // This catches 422 (validation errors) or 500 (server errors)
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    return data.recipe;
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return "Sorry, I couldn't reach the chef. Please check if the Python backend is running!";
  }
}