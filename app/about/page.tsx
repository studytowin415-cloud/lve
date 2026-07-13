import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-center text-5xl font-extrabold text-amber-700">
          🍃 About LVE
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700">
          LVE is an AI-powered recipe platform designed to help everyone cook
          delicious meals with confidence. WhetherYou&#39;re a beginner or an
          experienced home chef, LVE helps you discover recipes, save your
          favorites, and generate personalized meals using AI.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">🤖</div>
            <h2 className="mt-4 text-2xl font-bold">AI Chef</h2>
            <p className="mt-3 text-gray-600">
              Generate unique recipes from ingredients you already have.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">❤️</div>
            <h2 className="mt-4 text-2xl font-bold">Favorites</h2>
            <p className="mt-3 text-gray-600">
              Save your favorite recipes and access them anytime.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl">🍽️</div>
            <h2 className="mt-4 text-2xl font-bold">Discover</h2>
            <p className="mt-3 text-gray-600">
              Explore recipes from cuisines around the world.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-white p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold">Our Mission</h2>

          <p className="mt-5 text-gray-700">
            We believe cooking should be enjoyable, creative, and accessible.
            LVE combines modern AI with delicious recipes to make everyday
            cooking simple and exciting.
          </p>

          <Link
            href="/recipes"
            className="mt-8 inline-block rounded-full bg-amber-600 px-8 py-3 text-white hover:bg-amber-700"
          >
            Explore Recipes 🍴
          </Link>
        </div>
      </section>
    </main>
  );
}