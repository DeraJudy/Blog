// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='flex flex-col bg-slate-100'>

//       <Link href="/" className='px-2 sm:pl-14 py-3 border border-black'>
//         <Image src={assets.ozioma_black} width={180} alt='Logo' />
//       </Link>

//       <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>

//         <div className='w-[50%] sm:w-[80%] absolute right-0 '>
//             <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
//                 <Image src={assets.add_icon} alt='' width={28} /><p>Add blogs</p>
//             </Link>

//             <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
//                 <Image src={assets.blog_icon} alt='' width={28} /><p>Blog lists</p>
//             </Link>

//             <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
//                 <Image src={assets.email_icon} alt='' width={28} /><p>Subscriptions</p>
//             </Link>
//         </div>

        

//       </div>
      
//     </div>
//   )
// }

// export default Sidebar


"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button — only shows when sidebar is closed */}
      {!isOpen && (
        <button
          className="sm:hidden fixed top-4 left-4 z-50 bg-white border border-black p-2 rounded-md shadow-md"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={22} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed sm:static top-0 left-0 h-screen bg-[#BADFDB] flex flex-col border-r border-black z-40 
          transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Header with logo + close button */}
        <div className="flex items-center justify-between px-4 sm:pl-14 py-[22px] border-b border-black">
          <Link href="/">
            <Image src={assets.ozioma_black} width={160} alt="Logo" />
          </Link>
          {/* Close Button (only visible on mobile) */}
          <button
            className="sm:hidden p-1 border border-black rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="w-64 sm:w-80 py-8 px-6 space-y-5">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-gray-100 shadow-[-5px_5px_0px_#000000]"
            onClick={() => setIsOpen(false)}
          >
            <Image src={assets.add_icon} alt="" width={28} />
            <p>Add Blogs</p>
          </Link>

          <Link
            href="/admin/blogList"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-gray-100 shadow-[-5px_5px_0px_#000000]"
            onClick={() => setIsOpen(false)}
          >
            <Image src={assets.blog_icon} alt="" width={28} />
            <p>Blog Lists</p>
          </Link>

          <Link
            href="/admin/subscriptions"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-gray-100 shadow-[-5px_5px_0px_#000000]"
            onClick={() => setIsOpen(false)}
          >
            <Image src={assets.email_icon} alt="" width={28} />
            <p>Subscriptions</p>
          </Link>

          <Link
            href="/admin/userlist"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-gray-100 shadow-[-5px_5px_0px_#000000]"
            onClick={() => setIsOpen(false)}
          >
            <Image src={assets.email_icon} alt="" width={28} />
            <p>Users</p>
          </Link>

        </div>
      </div>

      {/* Overlay (click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
