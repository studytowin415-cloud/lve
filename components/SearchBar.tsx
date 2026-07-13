"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
  const query = search.trim().toLowerCase();

  if (!query) {
    alert("Please enter a recipe name.");
    return;
  }

  if (query.includes("butter")) {
    window.location.href = "/recipes/butter-chicken";
  } else if (query.includes("pizza")) {
    window.location.href = "/recipes/margherita-pizza";
  } else if (query.includes("sushi")) {
    window.location.href = "/recipes/sushi-rolls";
  } else if (query.includes("pad") || query.includes("thai")) {
    window.location.href = "/recipes/pad-thai";
  } else {
    alert("Recipe not found.");
  }
};
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex max-w-3xl gap-4 px-6">
        <input
          type="text"
          placeholder="Search recipes (e.g. Butter Chicken)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-full border border-gray-300 px-6 py-4 focus:border-amber-500 focus:outline-none"
        />

        <button
          onClick={handleSearch}
          className="rounded-full bg-amber-600 px-8 py-4 text-white hover:bg-amber-700"
        >
          Search
        </button>
      </div>
    </section>
  );
}