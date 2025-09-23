"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogItem from "./BlogItem";

const BlogSlider = ({ blogs, menu }) => {
  // ✅ Filter blogs (max 5)
  const filtered = blogs
    .filter((item) => (menu === "All" ? true : item.category === menu))
    .slice(0, 5);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < filtered.length - 1) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-[450px] sm:h-[550px]">
      {/* Slider track */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {filtered.map((item, i) => {
          const shortDescription =
            item.description.split(" ").slice(0, 15).join(" ") + "...";

          return (
            <div key={i} className="min-w-full h-full">
              {/* ✅ BlogItem fills entire slide */}
              <BlogItem
                id={item._id}
                image={item.image}
                title={item.title}
                description={shortDescription}
                category={item.category}
                full
                className="w-full h-full" // pass props for full fit
              />
            </div>
          );
        })}
      </motion.div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full transition ${
          index === 0
            ? "bg-gray-400/50 cursor-not-allowed"
            : "bg-black/50 text-white hover:bg-black"
        }`}
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        disabled={index === filtered.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full transition ${
          index === filtered.length - 1
            ? "bg-gray-400/50 cursor-not-allowed"
            : "bg-black/50 text-white hover:bg-black"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default BlogSlider;




// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import BlogItem from "./BlogItem";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const BlogSlider = ({ blogs, menu }) => {
//   // Filter blogs and limit to 5 max
//   const filtered = blogs
//     .filter((item) => (menu === "All" ? true : item.category === menu))
//     .slice(0, 5);

//   const [index, setIndex] = useState(0);

//   // ✅ Infinite loop logic
//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % filtered.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
//   };

//   // ✅ Optional auto-slide (every 5s)
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, [filtered.length]);

//   return (
//     <div className="relative w-full overflow-hidden py-10">
//       {/* Slider Track */}
//       <motion.div
//         className="flex gap-6"
//         animate={{ x: `-${index * 100}%` }}
//         transition={{ type: "spring", stiffness: 200, damping: 25 }}
//         style={{ width: `${filtered.length * 100}%` }}
//       >
//         {filtered.map((item, i) => {
//           const shortDescription =
//             item.description.split(" ").slice(0, 15).join(" ") + "...";

//           return (
//             <div
//               key={i}
//               className="min-w-full sm:min-w-[50%] md:min-w-[33.3%] lg:min-w-[25%] xl:min-w-[20%]"
//             >
//               <BlogItem
//                 id={item._id}
//                 image={item.image}
//                 title={item.title}
//                 description={shortDescription}
//                 category={item.category}
//               />
//             </div>
//           );
//         })}
//       </motion.div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full border"
//       >
//         <ChevronLeft className="w-5 h-5 text-gray-700" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full border"
//       >
//         <ChevronRight className="w-5 h-5 text-gray-700" />
//       </button>

//       {/* Dots Indicator */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {filtered.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               i === index ? "bg-[#0ABAB5] scale-125" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSlider;
