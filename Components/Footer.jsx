
// File: components/Footer.tsx
// import { assets } from "@/Assets/assets";
// import Link from "next/link";
// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0ABAB5] text-black py-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-14 px-6 font-medium">
        
//         {/* Left: Logo + Copyright */}
//         <div className="space-y-5 text-center sm:text-left">
//           <div className="flex justify-center sm:justify-start">
//             <Image src={assets.ozioma_black} alt="logo" width={200} />
//           </div>
//           <p className="text-base ml-3">
//             © {new Date().getFullYear()} <span className="font-semibold">oziomapov</span>. All rights reserved.
//           </p>
//           <p className="text-base ml-3">
//             Designed by{" "}
//             <Link href="/" className="underline hover:opacity-80 transition">
//               C.L.U.J
//             </Link>
//           </p>
//         </div>

//         {/* Center: Nav Links */}
//         <div className="text-center sm:text-left">
//           <h3 className="text-xl font-semibold mb-5">Explore</h3>
//           <ul className="grid grid-cols-2 gap-4 text-lg">
//             <li>
//               <Link href="/about" className="hover:underline transition">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline transition">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link href="/chaotic-thoughts" className="hover:underline transition">
//                 Chaotic Thoughts
//               </Link>
//             </li>
//             <li>
//               <Link href="/so-finance" className="hover:underline transition">
//                 So Finance
//               </Link>
//             </li>
//             <li>
//               <Link href="/lifestyle" className="hover:underline transition">
//                 Lifestyle
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Right: Social + Subscribe */}
//         <div className="flex flex-col items-center sm:items-start gap-8">
//           {/* Subscribe Button */}
//           <Link
//             href="/subscribe"
//             className="px-10 py-4 border border-black text-lg font-semibold shadow-[-6px_6px_0px_#fff] hover:scale-105 hover:shadow-[-4px_4px_0px_#fff] transition-transform duration-200"
//           >
//             Subscribe
//           </Link>

//           {/* Socials */}
//           <div className="flex gap-6">
//             <Link href="https://facebook.com" target="_blank">
//               <Image
//                 src={assets.facebook_icon}
//                 alt="Facebook"
//                 width={44}
//                 height={44}
//                 className="hover:opacity-80 transition"
//               />
//             </Link>
//             <Link href="https://twitter.com" target="_blank">
//               <Image
//                 src={assets.twitter_icon}
//                 alt="Twitter"
//                 width={44}
//                 height={44}
//                 className="hover:opacity-80 transition"
//               />
//             </Link>
//             <Link href="https://google.com" target="_blank">
//               <Image
//                 src={assets.googleplus_icon}
//                 alt="Google Plus"
//                 width={44}
//                 height={44}
//                 className="hover:opacity-80 transition"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// components/Footer.tsx
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Link from "next/link";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";

const Footer = () => {

   const [email, setEmail] = useState("");
  
      const OnSubmitHandler = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("email", email);
          const response = await axios.post('/api/email', formData);
          if (response.data.success) {
              toast.success(response.data.msg);
              setEmail();
          }
          else{
              toast.error("Error")
          }
      }

  return (
    <footer className="bg-[#0ABAB5] text-white px-6 py-10">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-10 border-b border-gray-600 pt-2 pb-9">

        {/* Brand + About */}
        <div>
          {/* Logo */}
          <div className="flex justify-center sm:justify-start -ml-2 mb-5">
             <Image src={assets.ozioma_black} alt="logo" width={200} />
          </div>
          <p className="text-sm text-gray-200 mb-4 leading-7">
            Your trusted IT partner in Lagos since 2016. Delivering excellence
            in hardware, software, and IT services.
          </p>
          <div className="flex space-x-3">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
            className="p-2 rounded-md bg-[#FFFFFF19] hover:bg-[#FF6F61]">
              <FaFacebookF className="h-4 w-4"  />
            </Link>

            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
            className="p-2 rounded-md bg-[#FFFFFF19] hover:bg-[#FF6F61]">
              <FaTwitter className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
            className="p-2 rounded-md bg-[#FFFFFF19] hover:bg-[#FF6F61]">
              <FaLinkedinIn  className="h-4 w-4"/>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
            className="p-2 rounded-md bg-[#FFFFFF19] hover:bg-[#FF6F61]">
              <FaInstagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xl mb-3 text-white">Explore</h4>
          <ul className="space-y-4 text-sm mt-9">
            <li><Link href="/about" className="hover:text-[#FF6F61]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#FF6F61]">Chaotic Thoughts</Link></li>
            <li><Link href="/projects" className="hover:text-[#FF6F61]">Lifestyle</Link></li>
            <li><Link href="/team" className="hover:text-[#FF6F61]">So Finance</Link></li>
            <li><Link href="/careers" className="hover:text-[#FF6F61]">Contact</Link></li>
            {/* <li><Link href="/blog" className="hover:text-[#FF6F61]">Blog</Link></li> */}
          </ul>
        </div>

        {/* Our Services */}
        {/* <div>
          <h4 className="font-semibold text-xl mb-3 text-white">Our Services</h4>
          <ul className="space-y-4 text-sm mt-7">
            <li><Link href="/hardware-sales" className="hover:text-[#FF6F61]">Hardware Sales</Link></li>
            <li><Link href="/it-repair" className="hover:text-[#FF6F61]">IT Repair</Link></li>
            <li><Link href="/software-development" className="hover:text-[#FF6F61]">Software Development</Link></li>
            <li><Link href="/cloud-solutions" className="hover:text-[#FF6F61]">Cloud Solutions</Link></li>
          </ul>
        </div> */}

          {/* Subscribe Form */}
         <form onSubmit={OnSubmitHandler}
                className='flex justify-between max-w-[500px] scale-75 sm:scale-100  mt-10 border
            border-black shadow-[-7px_7px_0px_#000000]' action="">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email'
                    className='pl-4 outline-none' name="" id="" />
                <button onSubmit={OnSubmitHandler} type='submit'
                    className='border-l cursor-pointer border-black py-4 px-4 sm:px-8 active:bg-gray-600 
                    active:text-white'>
                    Subscribe
                </button>
            </form>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-xl mb-3 text-white">Contact Us</h4>
          <div className="space-y-4 text-sm mt-4">
            {/* <div className="flex items-center space-x-3">
              <FaLocationArrow className="text-[#FF6F61]" />
              <p>Ikoyi, Lagos, Nigeria</p>
            </div> */}
            <div className="flex items-center space-x-3">
              <FaPhone className="text-[#FF6F61]" />
              <Link href="tel:08067593064" className="hover:text-[#FF6F61]">
                0806 759 3064
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-[#FF6F61]" />
              <Link
                href="mailto:hello@oziomapov.com"
                className="hover:text-[#FF6F61]"
              >
                pematrixtechnologies@gmail.com
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-4 pt-5 px-1 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300">
        <p>© 2025 oziomapov. All rights reserved.</p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <span>
            Designed by  
            <Link href="/" className="ml-2 hover:text-[#FF6F61]">
               C.L.U.J
            </Link>
          </span>
          {/* <Link href="/terms-of-service" className="hover:text-[#0ABAB5]">
            Terms of Service
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
