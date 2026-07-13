"use client";

import { useState } from "react";

export default function HistoryPage() {
  const [history] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    return JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  });

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-5xl font-bold">
          🕒 AI Recipe History
        </h1>

        {history.length === 0 ? (
          <p>No AI recipes generated yet.</p>
        ) : (
          <div className="space-y-4">
            {history.map((recipe, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow"
              >
                <pre className="whitespace-pre-wrap">
                  {recipe}
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}