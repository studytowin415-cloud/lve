"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👨‍🍳 Hi! I'm Chef LVE. Ask me anything about cooking!",
    },
  ]);

  const [input, setInput] = useState("");

async function sendMessage() {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { role: "user", text: userMessage },
  ]);

  setInput("");

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: userMessage,
    }),
  });

  const data = await response.json();

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: data.reply || "Sorry, I couldn't answer that.",
    },
  ]);
}

  return (
    <main className="min-h-screen bg-amber-50 p-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">👨‍🍳 Chef LVE</h1>

        <div className="mt-6 h-96 overflow-y-auto rounded-xl bg-gray-100 p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 rounded-xl p-3 ${
                msg.role === "user"
                  ? "bg-amber-200 text-right"
                  : "bg-white"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Chef LVE..."
            className="flex-1 rounded-xl border p-3"
          />

          <button
            onClick={sendMessage}
            className="rounded-xl bg-amber-600 px-6 text-white"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}