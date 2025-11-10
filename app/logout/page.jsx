"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem("user");

    // Redirect to homepage after a short delay
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Logging Out...</h1>
        <p className="text-gray-600">You’ll be redirected to the homepage shortly.</p>
      </div>
    </div>
  );
}
