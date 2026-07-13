"use client";

import { useState } from "react";

export default function AIPage() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
const [loading, setLoading] = useState(false);
  async function generateRecipe() {
    if (!ingredients.trim()) {
      alert("Please enter some ingredients.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients,
        }),
      });

      const data = await response.json();

      if (data.recipe) {
        setRecipe(data.recipe);
setLoading(false);
const oldHistory = JSON.parse(
  localStorage.getItem("recipeHistory") || "[]"
);

localStorage.setItem(
  "recipeHistory",
  JSON.stringify([data.recipe, ...oldHistory])
);
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to connect to AI.");
    }
  }

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          🤖 AI Recipe Generator
        </h1>

        <p className="mt-3 text-gray-600">
          Enter your ingredients and let AI suggest a recipe.
        </p>

        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Example: eggs, cheese, tomatoes"
          className="mt-6 h-40 w-full rounded-xl border p-4"
        />

        <button
  onClick={generateRecipe}
  disabled={loading}
  className="mt-6 rounded-full bg-amber-600 px-8 py-3 text-white hover:bg-amber-700 disabled:bg-gray-400"
>
  {loading ? "🍳 Cooking..." : "Generate Recipe"}
</button>

        {recipe && (
          <div className="mt-8 whitespace-pre-wrap rounded-xl bg-amber-100 p-6">
            {recipe}
          </div>
        )}
      </div>
    </main>
  );
}