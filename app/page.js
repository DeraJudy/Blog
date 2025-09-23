"use client"
import { useState } from "react";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {

  const [menu, setMenu] = useState("All"); // ✅ Single source of truth

  return (
    <>
      <Header  menu={menu} setMenu={setMenu} />
      <BlogList  menu={menu} setMenu={setMenu} />
      <Footer />
    </>
  );
}
