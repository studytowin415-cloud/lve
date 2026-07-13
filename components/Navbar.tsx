import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-8 py-5 shadow-sm backdrop-blur-md">
      <h1 className="text-3xl font-bold text-amber-700">
        🍃 LVE
      </h1>

      <ul className="flex gap-8 text-stone-700 font-medium">
        <li>
  <Link href="/" className="hover:text-amber-700">
    Home
  </Link>
</li>

<li>
  <Link href="/recipes" className="hover:text-amber-700">
    Recipes
  </Link>
</li>
<li>
  <Link href="/history" className="hover:text-amber-700">
    🕒 History
  </Link>
</li>
<li>
  <a href="/ai" className="hover:text-amber-700">
    AI Chef 🤖
  </a>
</li>
<li>
  <Link href="/favorites" className="hover:text-amber-700">
    ❤️ Favorites
  </Link>
</li>
<li>
  <a href="/about" className="hover:text-amber-700">
    About
  </a>
</li>
</ul>

     <Link
  href="/login"
  className="rounded-full bg-amber-600 px-5 py-2 text-white hover:bg-amber-700"
>
  Login
</Link>
    </nav>
  );
}