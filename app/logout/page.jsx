"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("user");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Logging Out...</h1>
        <p className="text-gray-600">You’ll be redirected to the homepage shortly.</p>
      </motion.div>
    </div>
  );
}
