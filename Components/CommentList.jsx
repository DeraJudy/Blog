"use client";
import { useState, useEffect } from "react";

export default function CommentList({ blogId, refresh }) {
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    setLoading(true);

    const res = await fetch(`/api/comments?blogId=${blogId}&page=${page}&limit=5`);
    const data = await res.json();

    setComments(data.comments ?? []);
    setTotal(data.total ?? 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [page, refresh]);

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-6 animate-pulse">
        Loading comments...
      </p>
    );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      // weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-[800px] mx-auto mt-12 mb-20">
      <h3 className="font-bold text-2xl text-gray-800 mb-6 text-center">
        💬 Comments ({total})
      </h3>

      {comments.length === 0 && (
        <p className="text-center text-gray-500 italic">
          No comments yet. Be the first to share your thoughts 💭
        </p>
      )}

      <div className="space-y-5">
        {comments.map((c) => (
          <div
            key={c._id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 bg-[#B3BFFF] text-pink-600 rounded-full flex items-center justify-center font-semibold">
                {c.name ? c.name[0].toUpperCase() : "?"}
              </div>

              {/* Comment content */}
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-sm">
                  {c.name}{" "}
                  {/* <span className="text-gray-400 text-xs">
                    ({c.email})
                  </span> */}
                </p>

                <p className="text-gray-700 mt-1 leading-relaxed">{c.comment}</p>

                <p className="text-xs text-gray-400 mt-2">
                  {formatDate(c.createdAt || c.date || new Date())}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {total > 5 && (
        <div className="flex justify-between items-center mt-8">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
          >
            ← Prev
          </button>

          <p className="text-sm text-gray-500">
            Page {page} of {Math.ceil(total / 5)}
          </p>

          <button
            disabled={page * 5 >= total}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
