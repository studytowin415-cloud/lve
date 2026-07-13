import Image from "next/image";
import FavoriteButton from "../../../components/FavoriteButton";
import { recipes } from "@/data/recipes";

export default async function RecipeDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <main className="p-10">
        <h1 className="text-4xl font-bold">Recipe Not Found 😢</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-lg">

        <div className="text-center">
          <Image
  src={recipe.image}
  alt={recipe.title}
  width={800}
  height={500}
  className="mx-auto h-80 w-full max-w-2xl rounded-3xl object-cover shadow-xl"
/>
          <h1 className="mt-4 text-5xl font-bold">
            {recipe.title}
          </h1>
<div className="rounded-xl bg-green-100 p-4 text-center">
  🔥 {recipe.calories} kcal
</div>

<div className="rounded-xl bg-blue-100 p-4 text-center">
  💪 {recipe.protein} Protein
</div>

<div className="rounded-xl bg-yellow-100 p-4 text-center">
  🍞 {recipe.carbs} Carbs
</div>

<div className="rounded-xl bg-pink-100 p-4 text-center">
  ⭐ {recipe.rating}/5
</div>
<div className="mt-8 rounded-2xl bg-yellow-50 p-6">
  <h2 className="mb-4 text-2xl font-bold">🥗 Nutrition</h2>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    <div>🔥 Calories: {recipe.calories}</div>
    <div>💪 Protein: {recipe.protein}</div>
    <div>🍞 Carbs: {recipe.carbs}</div>
    <div>🧈 Fat: {recipe.fat}</div>
  </div>
</div>
<div className="mt-8 flex gap-4">
  <button
    onClick={() => window.print()}
    className="rounded-xl bg-amber-600 px-6 py-3 text-white hover:bg-amber-700"
  >
    🖨️ Print Recipe
  </button>

  <button
    onClick={() =>
      navigator.share?.({
        title: recipe.title,
        text: `Check out this recipe: ${recipe.title}`,
        url: window.location.href,
      })
    }
    className="rounded-xl border border-amber-600 px-6 py-3 text-amber-700 hover:bg-amber-100"
  >
    📤 Share
  </button>
</div>
          <p className="mt-2 text-gray-600">
            {recipe.cuisine} Cuisine
          </p>
          <div className="mt-6 flex justify-center">
  <FavoriteButton slug={recipe.slug} />
</div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-amber-100 p-4 text-center">
            ⏱ {recipe.time}
          </div>

          <div className="rounded-xl bg-amber-100 p-4 text-center">
            🍽 {recipe.servings} Servings
          </div>

          <div className="rounded-xl bg-amber-100 p-4 text-center">
            ⭐ {recipe.difficulty}
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-bold">
          Ingredients
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-3xl font-bold">
          Instructions
        </h2>

        <ol className="mt-4 list-decimal space-y-3 pl-6">
          {recipe.instructions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

      </div>
    </main>
  );
}