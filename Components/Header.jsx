// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Header = () => {
//   return (
//     <div className='py-5 px-5 md:px-12 lg:px-28'>
//       <div className='flex justify-between items-center'>
//         <Link href='/' className='cursor-pointer'>
//             <Image 
//                 src={assets.ozioma} width={190} 
//                 alt='title-image' className='w-[130px] sm:w-auto'  
//             />
//         </Link>
//         <div className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 space-x-8'>
//               <Link href='/' className='cursor-pointer'>About</Link>
//               <Link href='/' className='cursor-pointer'>Contact</Link>
//         </div>
//         <button 
//             className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
//             border-solid border-black shadow-[-7px_7px_0px_#FF6F61]'>
//                 Subscribe
//                 {/* <Image src={assets.arrow} alt='image' /> */}
//         </button>
//       </div>
//       <div className='text-center my-10'>
//         <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
//         <p className='mt-6 max-w-[740px] m-auto text-xs sm:text-base'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias, 
//             maxime amet inventore ab quam voluptates est ratione consequatur.
//         </p>
//         <form 
//             className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border
//             border-black shadow-[-7px_7px_0px_#FF6F61]' action="">
//                 <input type="email" placeholder='Enter your email' 
//                 className='pl-4 outline-none' name="" id="" />
//                 <button type='submit'
//                     className='border-l cursor-pointer border-black py-4 px-4 sm:px-8 active:bg-gray-600 
//                     active:text-white'>
//                     Subscribe
//                 </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Header


// components/Navbar.tsx
"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Separate visible + dropdown links manually
  const visibleLinks = ["About", "Contact", "Categories"];
  const dropdownLinks = ["Chaotic Thoughts", "So Finance", "Lifestyle", "FAQ"];

  return (
    <nav className="bg-white shadow-md top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Blog Title */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-900">
            <Link href="/" className="cursor-pointer">
              <Image
                src={assets.ozioma_black}
                width={190}
                alt="title-image"
                className="w-[130px] sm:w-auto"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex space-x-6 relative">
            {/* About & Contact as normal links */}
            {visibleLinks.slice(0, 2).map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#FF6F61] transition"
                >
                  {link}
                </Link>
              </motion.div>
            ))}

            {/* Categories as dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-[#FF6F61] transition">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg p-2 space-y-2"
                  >
                    {dropdownLinks.map((link) => (
                      <motion.div
                        key={link}
                        whileHover={{ scale: 1.05, x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href={`/${link.toLowerCase()}`}
                          className="block text-gray-700 hover:text-[#FF6F61] transition"
                        >
                          {link}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
              border-solid border-black shadow-[-7px_7px_0px_#0ABAB5]"
            >
              Subscribe
            </motion.button>

            {/* Search Toggle */}
            <motion.button
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full border hover:bg-gray-100 transition"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Search Input */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 px-4 py-2 border-t"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* About & Contact */}
            {visibleLinks.slice(0, 2).map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="block text-gray-700 hover:text-[#FF6F61] transition"
              >
                {link}
              </Link>
            ))}

            {/* Categories with dropdown items */}
            <div>
              <p className="text-gray-700 font-medium mt-2">Categories</p>
              <div className="ml-4 mt-1 space-y-1">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="block text-gray-600 hover:text-[#FF6F61]transition"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Subscribe form */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center mt-7 gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
              border-solid border-black shadow-[-7px_7px_0px_#0ABAB5]"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
}
