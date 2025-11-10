"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="w-full p-2 border mb-3"
        onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="email" placeholder="Email" className="w-full p-2 border mb-3"
        onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input type="password" placeholder="Password" className="w-full p-2 border mb-3"
        onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}
