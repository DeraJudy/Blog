// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirect = searchParams.get("redirect") || "/";

//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     setLoading(false);

//     // if (data.message) {
//     //   toast.success("✅ Login Successful!");
//     //   localStorage.setItem("user", JSON.stringify(data.user));
//     //   router.push(redirect); // ✅ Go back to last page
//     // } else {
//     //   toast.error(data.error || "Login failed");
//     // }
//     if (data.user) {
//       toast.success("✅ Login Successful!");
//       localStorage.setItem("user", JSON.stringify(data.user));
//       router.push(redirect);
//     } else {
//       toast.error(data.error || "Login failed");
//     }

//   };

//   return (
//     <div className="max-w-md mx-auto p-6 mt-10 border rounded-lg shadow">
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
//         <Link className="text-blue-600 hover:underline" href={`/register?redirect=${redirect}`}>
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [redirect, setRedirect] = useState("/"); // default redirect
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Set redirect only on client after mount
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
    <div className="max-w-md mx-auto p-6 mt-10 border rounded-lg shadow">
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
