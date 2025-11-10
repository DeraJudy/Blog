"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CommentForm({ blogId, onCommentAdded }) {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    try {
      if (stored && stored !== "undefined") {
        setUser(JSON.parse(stored));
      } else {
        localStorage.removeItem("user");
      }
    } catch (error) {
      localStorage.removeItem("user");
      setUser(null);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    setLoading(true);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: content, blogId }),
    });

    const data = await res.json();
    alert(data.message || data.error);
    setContent("");
    onCommentAdded();
    setLoading(false);
  };

  // 💖 If not logged in
  if (!user)
    return (
      <div className="max-w-[800px] mx-auto mt-8 mb-12 text-center bg-pink-50 border border-pink-200 p-6 rounded-2xl shadow-sm">
        <p className="text-gray-700 text-lg">
          💬{" "}
          <Link
            href={`/login?redirect=${pathname}`}
            className="text-pink-600 font-semibold hover:underline"
          >
            Login
          </Link>{" "}
          to add a comment and join the conversation 💕
        </p>
      </div>
    );

  // 💬 If logged in
  return (
    <div className="max-w-[800px] mx-auto mt-12 mb-16 bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
      <h3 className="font-bold text-2xl text-gray-800 mb-4">
        💖 Leave a Comment
      </h3>

      {/* <p className="text-gray-600 text-sm mb-2">
        Commenting as <span className="font-semibold">{user.name}</span> (
        {user.email})
      </p> */}

      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded-xl p-3 mt-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your thoughts here..."
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#B3BFFF] text-white px-6 py-2 mt-4 rounded-xl font-medium shadow-sm hover:bg-pink-600 transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Comment 💬"}
        </button>
      </form>
    </div>
  );
}
