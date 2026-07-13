export default function FeaturedRecipes() {
  const recipes = [
    {
      title: "Creamy Alfredo Pasta",
      image: "🍝",
      time: "25 mins",
    },
    {
      title: "Fresh Garden Salad",
      image: "🥗",
      time: "10 mins",
    },
    {
      title: "Chocolate Cake",
      image: "🍰",
      time: "45 mins",
    },
  ];

  return (
    <section className="bg-white py-16">
      <h2 className="mb-10 text-center text-4xl font-bold text-stone-800">
        Featured Recipes
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.title}
            className="rounded-3xl bg-amber-50 p-8 shadow-md transition hover:scale-105"
          >
            <div className="text-6xl">{recipe.image}</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {recipe.title}
            </h3>

            <p className="mt-2 text-gray-600">
              ⏱ {recipe.time}
            </p>

            <button className="mt-6 rounded-full bg-amber-600 px-5 py-2 text-white hover:bg-amber-700">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}