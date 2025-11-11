"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedAdmin({ children }) {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.role !== "admin") {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
