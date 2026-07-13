export default function WhyChoose() {
  const features = [
    {
      title: "🤖 AI Powered",
      desc: "Generate recipes from ingredients you already have.",
    },
    {
      title: "❤️ Save Favorites",
      desc: "Bookmark recipes and access them anytime.",
    },
    {
      title: "🛒 Smart Shopping",
      desc: "Automatically create grocery lists.",
    },
  ];

  return (
    <section className="bg-orange-50 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Why Choose LVE?
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl bg-white p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="mt-4 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}