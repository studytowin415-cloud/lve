export default function PopularRecipes() {
  const recipes = [
  {
    name: "Butter Chicken",
    slug: "butter-chicken",
    cuisine: "Indian 🇮🇳",
    time: "35 min",
    emoji: "🍛",
  },
  {
    name: "Margherita Pizza",
    slug: "margherita-pizza",
    cuisine: "Italian 🇮🇹",
    time: "25 min",
    emoji: "🍕",
  },
  {
    name: "Sushi Rolls",
    slug: "sushi-rolls",
    cuisine: "Japanese 🇯🇵",
    time: "40 min",
    emoji: "🍣",
  },
  {
    name: "Pad Thai",
    slug: "pad-thai",
    cuisine: "Thai 🇹🇭",
    time: "30 min",
    emoji: "🍜",
  },
];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-2 text-center text-4xl font-bold">
          🔥 Popular This Week
        </h2>

        <p className="mb-10 text-center text-gray-600">
          Most loved recipes by our community.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.name}
              className="rounded-3xl bg-amber-50 p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-6xl">{recipe.emoji}</div>

              <h3 className="mt-5 text-xl font-bold">
                {recipe.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {recipe.cuisine}
              </p>

              <p className="mt-2 text-gray-500">
                ⏱ {recipe.time}
              </p>

             <a
  href={`/recipes/${recipe.slug}`}
  className="mt-5 block w-full rounded-full bg-amber-600 py-2 text-center text-white hover:bg-amber-700"
>
  View Recipe
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}