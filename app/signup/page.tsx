"use client";

import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully! 🎉");

      window.location.href = "/login";
    } catch (error) {
  if (error instanceof Error) {
    alert(error.message);
  } else {
    alert("Something went wrong.");
  }
}
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-amber-50 to-orange-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-bold text-amber-700">
          🍃 Create Account
        </h1>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-3"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-600 py-3 text-white hover:bg-amber-700"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-amber-700 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}