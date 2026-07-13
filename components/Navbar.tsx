"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../firebase/config";
export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    await signOut(auth);
  }
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
  <Link href="/ai" className="hover:text-amber-700">
    AI Chef 🤖
  </Link>
</li>
<li>
  <Link href="/favorites" className="hover:text-amber-700">
    ❤️ Favorites
  </Link>
</li>
<li>
  <Link href="/about" className="hover:text-amber-700">
    About
  </Link>
</li>
</ul>

{user ? (
  <div className="flex items-center gap-4">
    <span className="text-sm text-stone-700">
      {user.email}
    </span>

    <button
      onClick={handleLogout}
      className="rounded-full bg-red-500 px-5 py-2 text-white hover:bg-red-600"
    >
      Logout
    </button>
  </div>
) : (
  <Link
    href="/login"
    className="rounded-full bg-amber-600 px-5 py-2 text-white hover:bg-amber-700"
  >
    Login
  </Link>
)}     
    </nav>
  );
}