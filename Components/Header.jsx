// // components/Navbar.tsx
// "use client";
// import { assets } from "@/Assets/assets";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, Search, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar({ menu, setMenu }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const pathname = usePathname();

//   const dropdownLinks = [
//     { label: "Home", value: "All" },
//     { label: "Chaotic Thoughts", value: "Chaotic Thoughts" },
//     { label: "So Finance", value: "So Finance" },
//     { label: "Lifestyle", value: "Lifestyle" },
//   ];

//   return (
//     <nav className="bg-white shadow-sm w-full z-50 border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left (Desktop Nav Links) */}
//           <div className="hidden md:flex space-x-6">
//             {/* About link */}
//             <Link
//               href="/about"
//               className={`text-lg font-medium px-4 py-1 rounded-sm ${
//                 pathname === "/about"
//                   ? "bg-[#FF6F61] text-white"
//                   : "text-gray-700 hover:text-[#FF6F61]"
//               }`}
//             >
//               About
//             </Link>

//             {/* Categories dropdown (desktop only) */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center text-lg font-medium text-black hover:text-[#FF6F61]"
//               >
//                 Categories <ChevronDown className="ml-1 h-4 w-4" />
//               </button>

//               <AnimatePresence>
//                 {dropdownOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg p-3 space-y-2"
//                   >
//                     {dropdownLinks.map((link) => (
//                       <button
//                         key={link.value}
//                         onClick={() => setMenu(link.value)}
//                         className={`block w-full text-left px-2 py-1 rounded ${
//                           menu === link.value
//                             ? "bg-[#FF6F61] text-white"
//                             : "text-gray-700 hover:text-[#FF6F61]"
//                         }`}
//                       >
//                         {link.label}
//                       </button>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Center: Logo */}
//           <div className="flex-shrink-0 text-2xl font-bold text-gray-900 mx-auto md:mx-0 z-50 relative">
//             <button
//               onClick={() => {
//                 setMenu("All");
//                 setIsOpen(false);
//                 setSearchOpen(false);
//               }}
//               className="flex items-center focus:outline-none"
//             >
//               <Image
//                 src={assets.ozioma_black}
//                 width={200}
//                 alt="title-image"
//                 className="w-[140px] sm:w-[180px]"
//               />
//             </button>
//           </div>

//           {/* Right: Search + Subscribe (Desktop only) */}
//           <div className="hidden md:flex items-center space-x-4">

//             <Link href="/admin/addProduct" className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
//             border-solid border-black shadow-[-7px_7px_0px_#000000]'>
//               Get Started 
//               <Image src={assets.arrow} alt='image' />
//             </Link>

//             <motion.button
//               whileHover={{ rotate: 15, scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="p-2 rounded-full border hover:bg-gray-100 transition"
//             >
//               <Search className="h-5 w-5 text-gray-600" />
//             </motion.button>
//           </div>

//           {/* Mobile Header */}
//           <div className="flex md:hidden w-full justify-between items-center absolute left-0 px-4 top-0 h-20">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
//             >
//               {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//             </button>
//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
//             >
//               <Search className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Animated Search Input */}
//       <AnimatePresence>
//         {searchOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="bg-gray-50 px-4 py-2 border-t"
//           >
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full p-3 rounded-md border text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white shadow-lg border-t border-gray-200"
//           >
//             <div className="px-6 py-8 space-y-6 text-xl font-semibold">
//               {/* About */}
//               <div className="grid grid-cols-1 gap-4">
//                 <Link
//                   href="/about"
//                   className={`${
//                     pathname === "/about"
//                       ? "bg-[#FF6F61] text-white px-4 py-2 rounded-md"
//                       : "text-gray-800 hover:text-[#FF6F61]"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   About
//                 </Link>
//               </div>

//               {/* Categories */}
//               <div className="border-y text-left py-6">
//                 <p className="text-[#0ABAB5] font-bold uppercase">Categories</p>
//                 <div className="mt-4 grid grid-cols-2 gap-3">
//                   {dropdownLinks.map((link) => (
//                     <button
//                       key={link.value}
//                       onClick={() => {
//                         setMenu(link.value);
//                         setIsOpen(false);
//                       }}
//                       className={`text-gray-600 hover:text-[#FF6F61] transition ${
//                         menu === link.value ? "font-bold text-[#FF6F61]" : ""
//                       }`}
//                     >
//                       {link.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Get Started Button in Mobile */}
//               <Link href="/admin/addProduct" className='flex items-center gap-2 font-medium w-44 px-5 py-3 border 
//               border-solid border-black shadow-[-7px_7px_0px_#000000]'>
//                 Get Started 
//                 <Image src={assets.arrow} alt='image' />
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


// components/Navbar.tsx
"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ menu, setMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const dropdownLinks = [
    { label: "Home", path: "/" },
    { label: "Chaotic Thoughts", path: "/chaotic-thoughts" },
    { label: "So Finance", path: "/so-finance" },
    { label: "Lifestyle", path: "/lifestyle" },
  ];

  return (
    <nav className="bg-white shadow-sm w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Left (Desktop Nav Links) */}
          <div className="hidden md:flex space-x-6">
            {/* About link */}
            <Link
              href="/about"
              className={`text-lg font-medium px-4 py-1 rounded-sm ${
                pathname === "/about"
                  ? "bg-[#FF6F61] text-white"
                  : "text-gray-700 hover:text-[#FF6F61]"
              }`}
            >
              About
            </Link>

            {/* Categories dropdown (desktop only) */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-lg font-medium mt-2 text-black hover:text-[#FF6F61]"
              >
                Categories <ChevronDown className="ml-1 h-4 w-4 " />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-44 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-3 space-y-2"
                  >
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setDropdownOpen(false)}
                        className={`block w-full text-left px-2 py-1 rounded ${
                          pathname === link.path
                            ? "bg-[#FF6F61] text-white"
                            : "text-gray-700 hover:text-[#FF6F61]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-900 mx-auto md:mx-0 z-50 relative">
            <Link
              href="/"
              onClick={() => {
                setMenu("All");
                setIsOpen(false);
                setSearchOpen(false);
              }}
              className="flex items-center focus:outline-none"
            >
              <Image
                src={assets.ozioma_black}
                width={200}
                alt="title-image"
                className="w-[140px] sm:w-[180px]"
              />
            </Link>
          </div>

          {/* Right: Search + Get Started (Desktop only) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/admin/addProduct"
              className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
              border-solid border-black shadow-[-7px_7px_0px_#000000]"
            >
              Get Started
              <Image src={assets.arrow} alt="arrow" />
            </Link>

            <motion.button
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full border hover:bg-gray-100 transition"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </motion.button>
          </div>

          {/* Mobile Header */}
          <div className="flex md:hidden w-full justify-between items-center absolute left-0 px-4 top-0 h-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Search className="h-6 w-6" />
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
              className="w-full p-3 rounded-md border text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <div className="px-6 py-8 space-y-6 text-xl font-semibold">
              {/* About */}
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === "/about"
                      ? "bg-[#FF6F61] text-white px-4 py-2 rounded-md"
                      : "text-gray-800 hover:text-[#FF6F61]"
                  }`}
                >
                  About
                </Link>
              </div>

              {/* Categories */}
              <div className="border-y text-left py-6">
                <p className="text-[#0ABAB5] font-bold uppercase">Categories</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-gray-600 text-lg hover:text-[#FF6F61] transition ${
                        pathname === link.path ? "font-bold text-[#FF6F61]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Get Started Button in Mobile */}
              <Link
                href="/admin/addProduct"
                onClick={() => setIsOpen(false)}
                className="flex items-center text-base gap-2 font-medium w-40 px-5 py-3 border 
                border-solid border-black shadow-[-7px_7px_0px_#000000]"
              >
                Get Started
                <Image src={assets.arrow} alt="image" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
