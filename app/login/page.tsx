"use client";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful! 🎉");

    window.location.href = "/";
  } catch (error) {
  if (error instanceof Error) {
    alert(error.message);
  } else {
    alert("Something went wrong.");
  }
}
}
    const newLocal = "min-h-screen bg-linear-to-br from-amber-50 to-orange-100 flex items-center justify-center p-6";
  async function handleGoogleLogin() {
  try {
    await signInWithPopup(auth, googleProvider);

    alert("Logged in with Google! 🎉");

    window.location.href = "/";
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Google Sign-In failed.");
    }
  }
}
    return (
    <main className={newLocal}>
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-bold text-amber-700">
          🍃 Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Login to continue using LVE
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-3 outline-none focus:border-amber-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-3 outline-none focus:border-amber-500"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-600 py-3 text-white font-semibold hover:bg-amber-700"
          >
            Login
          </button>
          <button
  type="button"
  onClick={handleGoogleLogin}
  className="mt-4 w-full rounded-xl border border-gray-300 bg-white py-3 font-medium hover:bg-gray-100"
>
  Continue with Google
</button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          {"Don't have an account? "}
          <Link
            href="/signup"
            className="font-semibold text-amber-700 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}