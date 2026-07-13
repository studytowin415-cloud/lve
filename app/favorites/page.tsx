"use client";

import { recipes } from "@/data/recipes";
import Link from "next/link";
import { getFavorites } from "../../lib/favorites";

export default function FavoritesPage() {
  const favorites = getFavorites();

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.slug)
  );

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold mb-8">
          ❤️ Favorite Recipes
        </h1>

        {favoriteRecipes.length === 0 ? (
          <p>No favorite recipes yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {favoriteRecipes.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="rounded-2xl bg-white p-6 shadow hover:shadow-lg"
              >
                <div className="text-5xl">{recipe.emoji}</div>
                <h2 className="mt-3 text-2xl font-bold">
                  {recipe.title}
                </h2>
                <p>{recipe.cuisine}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}