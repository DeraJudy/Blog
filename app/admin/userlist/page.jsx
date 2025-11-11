"use client";

import ProtectedAdmin from "@/Components/ProtectedAdmin";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      if (res.ok) setUsers(data.users);
      else setError(data.error || "Failed to fetch users");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id, role) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      const data = await res.json();
      if (res.ok) fetchUsers();
      else alert(data.error || "Failed to update role");
    } catch (err) {
      alert(err.message);
    }
  };

  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user? 💔")) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) fetchUsers();
      else alert(data.error || "Failed to delete user");
    } catch (err) {
      alert(err.message);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const admins = users.filter((user) => user.role === "admin");

  if (!mounted)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 text-pink-600 text-lg font-semibold">
        🌸 Preparing your pretty dashboard... 💅
      </div>
    );

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
        <div className="w-64 h-2 bg-pink-200 rounded-full overflow-hidden">
          <div className="h-full bg-pink-500 animate-loading-bar"></div>
        </div>
        <p className="mt-4 text-pink-700 font-medium animate-pulse">Loading users... 💫</p>
        <style jsx>{`
          @keyframes loadingBar {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-loading-bar {
            width: 100%;
            animation: loadingBar 1.5s infinite;
          }
        `}</style>
      </div>
    );

  if (error)
    return (
      <p className="p-4 text-center text-red-500 bg-rose-50 border border-red-200 rounded-xl mx-8 mt-8">
        ❌ {error}
      </p>
    );

  return (
    <ProtectedAdmin>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 p-6 flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-pink-200">
          <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
            🌸 User Management 💖
          </h1>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="🔍 Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md p-3 rounded-full border border-pink-300 shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-700"
            />
          </div>

          {/* Admin Table */}
          <h2 className="text-2xl font-bold text-[#B3BFFF] mb-4">Admin List 👑</h2>
          <table className="w-full border border-pink-200 rounded-xl overflow-hidden shadow-md">
            <thead className="bg-rose-100 text-pink-700">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {admins.length > 0 ? (
                admins.map((admin, index) => (
                  <tr
                    key={admin._id}
                    className={`transition-all ${
                      index % 2 === 0 ? "bg-white" : "bg-pink-50"
                    } hover:bg-rose-50`}
                  >
                    <td className="p-3 text-gray-700 font-medium">{admin.name}</td>
                    <td className="p-3 text-gray-600">{admin.email}</td>
                    <td className="p-3 text-gray-900">{admin.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4 text-gray-500">
                    No admins found 💁‍♀️
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Users Table */}
          <h2 className="text-2xl font-bold text-[#B3BFFF] mt-12 mb-4">All Users 👩‍💻</h2>
          <table className="w-full border border-pink-200 rounded-xl overflow-hidden shadow-md mb-10">
            <thead className="bg-pink-100 text-pink-700">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  className={`transition-all ${
                    index % 2 === 0 ? "bg-white" : "bg-pink-50"
                  } hover:bg-rose-50`}
                >
                  <td className="p-3 text-gray-700">{user.name}</td>
                  <td className="p-3 text-gray-600">{user.email}</td>
                  <td className="p-3 text-pink-700 font-semibold">{user.role}</td>
                  <td className="p-3 flex justify-center gap-3">
                    {user.role !== "admin" && (
                      <button
                        onClick={() => updateRole(user._id, "admin")}
                        className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-xl shadow-md transition-transform hover:scale-105"
                      >
                        Make Admin 🌟
                      </button>
                    )}
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl shadow-md transition-transform hover:scale-105"
                    >
                      Delete 💔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedAdmin>
  );
}
