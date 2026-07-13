export default function Categories() {
  const categories = [
  "🍛 Indian",
  "🍝 Italian",
  "🥡 Chinese",
  "🍣 Japanese",
  "🌮 Mexican",
  "🥙 Mediterranean",
  "🥘 Spanish",
  "🥐 French",
  "🍜 Korean",
  "🍲 Thai",
  "🥗 Healthy",
  "🥬 Vegan",
  "🍰 Desserts",
  "🥤 Drinks",
];

  return (
    <section className="bg-amber-50 py-16">
      <h2 className="mb-8 text-center text-4xl font-bold text-stone-800">
        Browse by Category
      </h2>

      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full bg-white px-6 py-3 shadow hover:bg-amber-100"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}