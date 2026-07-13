export default function RecipePage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-stone-800">
          🍛 Butter Chicken
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          A rich, creamy, and flavorful Indian curry loved around the world.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <div className="text-center text-8xl">🍛</div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-amber-100 p-4 text-center">
              <h3 className="font-semibold">⏱ Time</h3>
              <p>35 mins</p>
            </div>

            <div className="rounded-xl bg-amber-100 p-4 text-center">
              <h3 className="font-semibold">🍽 Servings</h3>
              <p>4 People</p>
            </div>

            <div className="rounded-xl bg-amber-100 p-4 text-center">
              <h3 className="font-semibold">⭐ Difficulty</h3>
              <p>Medium</p>
            </div>
          </div>

          <h2 className="mt-10 text-3xl font-bold">
            Ingredients
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>500g Chicken</li>
            <li>2 Tomatoes</li>
            <li>Fresh Cream</li>
            <li>Butter</li>
            <li>Garam Masala</li>
            <li>Garlic & Ginger</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold">
            Instructions
          </h2>

          <ol className="mt-4 list-decimal space-y-3 pl-6">
            <li>Marinate the chicken with spices.</li>
            <li>Cook onions, tomatoes, garlic, and ginger.</li>
            <li>Blend into a smooth gravy.</li>
            <li>Add butter and cream.</li>
            <li>Add the cooked chicken.</li>
            <li>Simmer for 10 minutes and serve hot.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}