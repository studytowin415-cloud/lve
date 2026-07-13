export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];

  const favorites = localStorage.getItem("favorites");

  return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorite(slug: string) {
  const favorites = getFavorites();

  if (!favorites.includes(slug)) {
    favorites.push(slug);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function removeFavorite(slug: string) {
  const favorites = getFavorites().filter((item) => item !== slug);

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function isFavorite(slug: string) {
  return getFavorites().includes(slug);
}