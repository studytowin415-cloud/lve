export default function Footer() {
  return (
    <footer className="bg-stone-900 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">🍃 LVE</h2>

        <p className="mt-3 text-gray-400">
          Cook smarter. Eat healthier. Live better.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © 2025 LVE. All rights reserved.
        </p>
        <p className="mt-6 text-center text-sm text-stone-500">
  © {new Date().getFullYear()} LVE • Made with ❤️ by Shrinidhi
</p>
      </div>
      
    </footer>
  );
}