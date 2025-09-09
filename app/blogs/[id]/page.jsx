// "use client"
// import { use } from 'react'; // ✅ Import use() => chatgpt
// import { assets, blog_data } from '@/Assets/assets';
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
// import Footer from '@/Components/Footer';
// import Link from 'next/link';

// const page = ({params}) => {

//     const { id } = use(params); // ✅ Unwrap params=> chatgpt
    
//     const [data, setData] = useState(null);

//     const fetchBlogData = () => {
//         for (let i = 0; i < blog_data.length; i++) 
//         {
//             // if (Number(params.id)===blog_data[i].id) {
//             //     setData(blog_data[i]);
//             //     console.log(blog_data[i]);
//             //     break;
//             // }
//             if (Number(id) === blog_data[i].id) { // ✅ Use unwrapped id => chatgpt
//                 setData(blog_data[i]);
//                 console.log(blog_data[i]);
//                 break;
//             }
//         }
//     }

//     // useEffect(() => {
//     //     fetchBlogData();
//     // }, [])

//     React.useEffect(() => {
//         fetchBlogData();
//     }, []);

//   return (data?<>
//     <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
//       <div className='flex justify-between items-center'>
//         <Link href='/' className='cursor-pointer'>
//             <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
//         </Link>
//         <button className='flex items-center gap-2 font-medium px-3 
//         py-1 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] '>
//             Get Started
//             <Image src={assets.arrow} alt='arrow' />
//         </button>
//       </div>

//       <div className='text-center my-24'>
//         <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
//             {data.title}
//         </h1>
//         <Image src={data.author_img} alt='Author Img' width={150} height={150}
//         className='mx-auto mt-6 border border-white rounded-full'/>
//         <p className='mt-2.5 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
//       </div>
//     </div>
//     <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>    
//         <Image src={data.image} width={1280} height={720} alt='' 
//         className='border-4 border-white'/>
//         <h1 className='my-8 text-[26] font-semibold'>Introduction:</h1>
//         <p>{data.description}</p>
//         <h3 className='my-5 text-[18px] font-semibold '> Step 1: Self-Reflection and Goal Setting</h3>
//         <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
//             voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
//             Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <h3 className='my-5 text-[18px] font-semibold '> Step 2: Self-Reflection and Goal Setting</h3>
//         <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
//             voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
//             Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <h3 className='my-5 text-[18px] font-semibold '> Step 3: Self-Reflection and Goal Setting</h3>
//         <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
//             voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
//             Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <h3 className='my-5 text-[18px] font-semibold '> Conclusion:</h3>
//         <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
//             voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
//             Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <div className='my-24'>
//             <p className='text-black font font-semibold my-4'>
//                 Share this article on social media
//             </p>
//             <div className='flex'>
//                 <Image src={assets.facebook_icon} width={50} alt="facebook_icon" />
//                 <Image src={assets.twitter_icon} width={50} alt="twitter_icon" />
//                 <Image src={assets.googleplus_icon} width={50} alt="googleplus_icon" />
//             </div>
//         </div>
//     </div>
//     <Footer />
//     </>:<></>
//   )
// }

// export default page


"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Page = ({ params }) => {
    const { id } = React.use(params); // ✅ Correct way to get ID
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Separate visible + dropdown links
  const visibleLinks = ["About", "Contact", "Categories"];
  const dropdownLinks = ["Chaotic Thoughts", "So Finance", "Reviews", "FAQ"];

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 pb-5">
        {/* ✅ Transparent Navbar */}
        <nav className="bg-transparent shadow-md top-0 w-full z-50">
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

                {/* Categories Dropdown */}
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

          {/* Search Input */}
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
                {visibleLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="block text-gray-700 hover:text-[#FF6F61] transition"
                  >
                    {link}
                  </Link>
                ))}
                <div>
                  <p className="text-gray-700 font-medium mt-2">Categories</p>
                  <div className="ml-4 mt-1 space-y-1">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link}
                        href={`/${link.toLowerCase()}`}
                        className="block text-gray-600 hover:text-[#FF6F61] transition"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
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

        {/* Blog Content */}
        <div className="text-center my-24 py-5 px-5 md:px-12 lg:px-28">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt="Author Img"
            width={150}
            height={150}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-2.5 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt=""
          className="border-4 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
          voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
          velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
          voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
          velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
          voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
          velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
          voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
          velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="facebook_icon" />
            <Image src={assets.twitter_icon} width={50} alt="twitter_icon" />
            <Image src={assets.googleplus_icon} width={50} alt="googleplus_icon" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
