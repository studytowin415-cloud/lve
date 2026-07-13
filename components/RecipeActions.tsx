"use client";

export default function RecipeActions({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mt-8 flex gap-4">
      <button
        onClick={() => window.print()}
        className="rounded-xl bg-amber-600 px-6 py-3 text-white"
      >
        🖨️ Print Recipe
      </button>

      <button
        onClick={() =>
          navigator.share?.({
            title,
            text: `Check out this recipe: ${title}`,
            url: window.location.href,
          })
        }
        className="rounded-xl border border-amber-600 px-6 py-3"
      >
        📤 Share
      </button>
    </div>
  );
}