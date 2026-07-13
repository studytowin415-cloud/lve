"use client";

import { useState } from "react";
import {
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "../lib/favorites";

export default function FavoriteButton({ slug }: { slug: string }) {
  const [favorite, setFavorite] = useState(() =>
    getFavorites().includes(slug)
  );

  function toggleFavorite() {
    if (favorite) {
      removeFavorite(slug);
    } else {
      saveFavorite(slug);
    }

    setFavorite(!favorite);
  }

  return (
    <button
      onClick={toggleFavorite}
      className="rounded-full bg-red-500 px-5 py-2 text-white hover:bg-red-600"
    >
      {favorite ? "❤️ Saved" : "🤍 Save"}
    </button>
  );
}