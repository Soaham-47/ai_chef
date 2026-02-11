export async function getRecipeFromBackend(ingredientsArr) {
  try {
    const response = await fetch("http://localhost:5000/api/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    const data = await response.json();
    return data.recipe;
  } catch (err) {
    console.error("Error fetching recipe:", err);
  }
}
