
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
    <footer className="bg-[#0ABAB5] text-white px-6 py-12">
      {/* Top Section */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-12 border-b border-gray-500 pb-10"
      >
        {/* Logo + About */}
        <div className="text-left">
          <div className="flex justify-start mb-6">
            <Image
              src={assets.ozioma_black}
              alt="OziomaPov Logo"
              width={160}
              height={60}
            />
          </div>
          <p className="text-sm text-black font-bold leading-7 mb-5">
            OziomaPov is your go-to lifestyle and thought hub — where real stories,
            daily inspiration, and authentic voices meet. Dive into creativity,
            style, culture, and self-growth with a touch of honesty.
          </p>

          <div className="flex space-x-3 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-2 rounded-md bg-[#ffffff1a] hover:bg-[#FF6F61] transition"
            >
              <FaFacebookF className="h-4 w-4" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-2 rounded-md bg-[#ffffff1a] hover:bg-[#FF6F61] transition"
            >
              <FaTwitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-md bg-[#ffffff1a] hover:bg-[#FF6F61] transition"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 rounded-md bg-[#ffffff1a] hover:bg-[#FF6F61] transition"
            >
              <FaInstagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Explore */}
        <div className="text-left">
          <h4 className="font-extrabold text-2xl mb-4 text-white">Explore</h4>
          <ul className="space-y-3 text-sm text-black font-bold">
            <li>
              <Link href="/about" className="hover:text-[#FF6F61]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#FF6F61]">
                Chaotic Thoughts
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#FF6F61]">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#FF6F61]">
                So Finance
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FF6F61]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-left">
          <h4 className="font-extrabold text-2xl mb-4 text-white">
            Join Our Newsletter
          </h4>
          <p className="text-sm text-black font-bold mb-5">
            Get the latest stories, trends, and updates straight to your inbox.
          </p>
          <form
            onSubmit={OnSubmitHandler}
            className="flex items-center border border-black shadow-[-7px_7px_0px_#FF6F61] rounded-md overflow-hidden"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Where should I put the good stuff?"
              className="pl-4 py-3 text-black w-full outline-none"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-3 px-5 font-semibold hover:bg-[#FF6F61] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h4 className="font-extrabold text-2xl mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 font-bold text-black text-sm">
            {/* <li className="flex items-center gap-2">
              <FaPhone className="text-[#FF6F61]" />
              <Link href="tel:08067593064" className="hover:text-[#FF6F61]">
                0806 759 3064
              </Link>
            </li> */}
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#FF6F61] font-bold" />
              <Link
                href="mailto:hello@oziomapov.com"
                className="hover:text-[#FF6F61]"
              >
                hello@oziomapov.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-7xl mx-auto mt-6 pt-5 flex flex-col sm:flex-row 
        justify-between items-start sm:items-center text-xs sm:text-sm text-black font-bold"
      >
        <p>© 2025 OziomaPov. All rights reserved.</p>
        <p className="mt-3 sm:mt-0">
          Designed by{" "}
          <Link href="/" className="hover:text-[#FF6F61] font-medium">
            C.L.U.J
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
