// import { assets } from '@/Assets/assets'
// import Link from "next/link";
// import Image from 'next/image'
// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#0ABAB5] py-5 items-center'>
//       <Image src={assets.ozioma_black} alt='' width={160} />
//       <div>
//         <p className='text-sm text-black'>All rights reserved. Copyright © oziomapov </p>
//         <Link href='' className='text-sm text-black' >
//             Designed by C.L.U.J
//         </Link>
//       </div>
//       <div className='flex'>
//         <Image src={assets.facebook_icon} alt='Social_Media_Icon' width={40} />
//         <Image src={assets.twitter_icon} alt='Social_Media_Icon' width={40} />
//         <Image src={assets.googleplus_icon} alt='Social_Media_Icon' width={40} />

//       </div>
//     </div>
//   )
// }

// export default Footer


// import { assets } from '@/Assets/assets'
// import Link from "next/link";
// import Image from 'next/image';
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0ABAB5] text-black py-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 items-start text-lg font-medium">
        
//         {/* Left: Logo + Copyright */}
//         <div className="space-y-3 px-2 text-xl sm:text-base text-center sm:text-left border-b sm:border-none pb-6 sm:pb-0">
//           <div className="flex justify-center sm:justify-start">
//             <Image src={assets.ozioma_black} alt="logo" width={180} />
//           </div>
//           <p className="px-3">© {new Date().getFullYear()} oziomapov. All rights reserved.</p>
//           <p className="px-3">
//             Designed by{" "}
//             <Link href="/" className="underline hover:opacity-80 transition">
//               C.L.U.J
//             </Link>
//           </p>
//         </div>

//         {/* Center: Nav Links */}
//         <div className="text-center text-xl sm:text-base sm:text-left border-b sm:border-none pb-6 sm:pb-0">
//           <ul className="grid grid-cols-2 gap-4">
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
//         <div className="flex flex-col items-center sm:items-start gap-6 pb-2 sm:pb-0">
          
//           {/* Subscribe Button */}
//           <Link
//             href="/subscribe"
//             className="px-8 py-3 border border-black font-semibold shadow-[-6px_6px_0px_#fff] hover:scale-105 transition"
//           >
//             Subscribe
//           </Link>

//           {/* Socials */}
//           <div className="flex gap-6">
//             <Link href="https://facebook.com" target="_blank">
//               <Image
//                 src={assets.facebook_icon}
//                 alt="Facebook"
//                 width={36}
//                 className="hover:opacity-80 transition"
//               />
//             </Link>
//             <Link href="https://twitter.com" target="_blank">
//               <Image
//                 src={assets.twitter_icon}
//                 alt="Twitter"
//                 width={36}
//                 className="hover:opacity-80 transition"
//               />
//             </Link>
//             <Link href="https://google.com" target="_blank">
//               <Image
//                 src={assets.googleplus_icon}
//                 alt="Google Plus"
//                 width={36}
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



// File: components/Footer.tsx
import { assets } from "@/Assets/assets";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0ABAB5] text-black py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-14 px-6 font-medium">
        
        {/* Left: Logo + Copyright */}
        <div className="space-y-5 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <Image src={assets.ozioma_black} alt="logo" width={200} />
          </div>
          <p className="text-base ml-3">
            © {new Date().getFullYear()} <span className="font-semibold">oziomapov</span>. All rights reserved.
          </p>
          <p className="text-base ml-3">
            Designed by{" "}
            <Link href="/" className="underline hover:opacity-80 transition">
              C.L.U.J
            </Link>
          </p>
        </div>

        {/* Center: Nav Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-5">Explore</h3>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            <li>
              <Link href="/about" className="hover:underline transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/chaotic-thoughts" className="hover:underline transition">
                Chaotic Thoughts
              </Link>
            </li>
            <li>
              <Link href="/so-finance" className="hover:underline transition">
                So Finance
              </Link>
            </li>
            <li>
              <Link href="/lifestyle" className="hover:underline transition">
                Lifestyle
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Social + Subscribe */}
        <div className="flex flex-col items-center sm:items-start gap-8">
          {/* Subscribe Button */}
          <Link
            href="/subscribe"
            className="px-10 py-4 border border-black text-lg font-semibold shadow-[-6px_6px_0px_#fff] hover:scale-105 hover:shadow-[-4px_4px_0px_#fff] transition-transform duration-200"
          >
            Subscribe
          </Link>

          {/* Socials */}
          <div className="flex gap-6">
            <Link href="https://facebook.com" target="_blank">
              <Image
                src={assets.facebook_icon}
                alt="Facebook"
                width={44}
                height={44}
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Image
                src={assets.twitter_icon}
                alt="Twitter"
                width={44}
                height={44}
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://google.com" target="_blank">
              <Image
                src={assets.googleplus_icon}
                alt="Google Plus"
                width={44}
                height={44}
                className="hover:opacity-80 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
