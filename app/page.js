"use client"
import { useState } from "react";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Subscribe from "@/Components/Subscribe";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {

  const [menu, setMenu] = useState("All"); // ✅ Single source of truth

  return (
    <>
      <ToastContainer theme="dark" />
      <Header  menu={menu} setMenu={setMenu} />
      <Subscribe />
      <BlogList  menu={menu} setMenu={setMenu} />
      <Footer />
    </>
  );
}
