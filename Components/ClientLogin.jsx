// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";

// export default function ClientLogin() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [redirect, setRedirect] = useState("/");
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const r = searchParams.get("redirect");
//     if (r) setRedirect(r);
//   }, [searchParams]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (data.user) {
//         toast.success("✅ Login Successful!");
//         localStorage.setItem("user", JSON.stringify(data.user));
//         router.push(redirect);
//       } else {
//         toast.error(data.error || "Login failed");
//       }
//     } catch (err) {
//       setLoading(false);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="max-w-md w-full p-6 border rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border mb-3 rounded"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border mb-4 rounded"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />

//         <button
//           className="bg-blue-600 text-white w-full p-2 rounded disabled:opacity-50"
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       <p className="mt-3">
//         Don’t have an account?{" "}
//         <Link
//           className="text-blue-600 hover:underline"
//           href={`/register?redirect=${redirect}`}
//         >
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("/api/auth/login", { email, password });

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Login successful!");

        // Store user info including role
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.user.name,
            email: data.user.email,
            role: data.user.role, // important!
          })
        );

        // Redirect to intended page or home
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get("redirect") || "/";
        router.push(redirect);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
