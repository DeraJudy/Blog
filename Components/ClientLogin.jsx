"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ClientLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [redirect, setRedirect] = useState("/");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const r = searchParams.get("redirect");
    if (r) setRedirect(r);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (data.user) {
        toast.success("✅ Login Successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push(redirect);
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md w-full p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          className="bg-blue-600 text-white w-full p-2 rounded disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-3">
        Don’t have an account?{" "}
        <Link
          className="text-blue-600 hover:underline"
          href={`/register?redirect=${redirect}`}
        >
          Register
        </Link>
      </p>
    </div>
  );
}
