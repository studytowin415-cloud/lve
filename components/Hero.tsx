import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center justify-center bg-linear-to-b from-amber-50 to-orange-100 px-6">
      <div className="max-w-3xl text-center">
        <p className="mb-3 text-amber-700 font-semibold tracking-widest uppercase">
          Welcome to LVE
        </p>

        <h1 className="text-6xl font-extrabold leading-tight text-stone-800">
          Discover Recipes <br />
          Made Just For You 🍽️
        </h1>

        <p className="mt-6 text-lg text-stone-600">
          Save your favorite recipes, discover new dishes, and let AI create
          delicious meals from the ingredients you already have.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/recipes"
            className="rounded-full bg-amber-600 px-8 py-3 text-white hover:bg-amber-700"
          >
            Explore Recipes
          </Link>

          <Link
            href="/ai"
            className="rounded-full border border-amber-600 px-8 py-3 text-amber-700 hover:bg-amber-100"
          >
            AI Recipe Generator
          </Link>
        </div>
      </div>
    </section>
  );
}