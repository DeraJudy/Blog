"use client";
import React, { useEffect, useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Link from "next/link";
import axios from "axios";
import Header from "@/Components/Header";
import CommentForm from "@/Components/CommentForm";
import CommentList from "@/Components/CommentList";

const Page = ({ params: paramsPromise }) => {
  const params = React.use(paramsPromise);
  const { id } = params;

  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get("/api/blog", { params: { id } });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    if (id) fetchBlogData();
  }, [id]);

  if (!data) return null;

  // ✅ Format blog date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      // weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      {/* ✅ Updated background color */}
      <div style={{ backgroundColor: "#BADFDB" }} className="pb-5">
        <Header />

        <div className="text-center my-24 py-5 px-5 md:px-12 lg:px-28">

          {/* ✅ Blog title */}
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mt-10 mx-auto">
            {data.title}
          </h1>

          {/* ✅ Only render author image if it exists */}
          {data.authorImg && (
            <Image
              src={data.authorImg}
              alt="Author Img"
              width={150}
              height={150}
              className="mx-auto mt-6 border border-white rounded-full"
            />
          )}
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        {/* ✅ Only render blog image if it exists */}
        {data.image && (
          <Image
            src={data.image}
            width={1280}
            height={720}
            alt={data.title}
            className="border-4 border-white"
          />
        )}

         {/* ✅ Info row: Date | Topic | Author */}
          <div className="flex justify-between text-gray-700 text-sm sm:text-base max-w-[700px] mt-8 mx-auto">
            <p>{formatDate(data.createdAt || new Date())}</p>
            <p className="font-medium">{data.category || "General"}</p>
            <p className="font-semibold">{data.author || "Unknown"}</p>
          </div>

        <div className="my-8 space-y-4 text-gray-800 leading-relaxed">
          {data.description?.split("\n").map((line, index) => (
            <p key={index} className="text-base">
              {line}
            </p>
          ))}
        </div>

        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-2">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google Plus" />
          </div>
        </div>
      </div>

      <CommentForm blogId={id} onCommentAdded={() => setRefresh((r) => !r)} />
      <CommentList blogId={id} refresh={refresh} />

      <Footer />
    </>
  );
};

export default Page;




// "use client";
// import React, { useEffect, useState } from "react";
// import { assets } from "@/Assets/assets";
// import Image from "next/image";
// import Header from "@/Components/Header"
// import Footer from "@/Components/Footer";
// import Link from "next/link";
// import axios from "axios";

// const Page = ({ params }) => {
  
//     // const { id } = React.use(params); // ✅ Correct way to get ID
//   const [data, setData] = useState(null);

//   // Separate visible + dropdown links
//   const visibleLinks = ["About", "Contact", "Categories"];
//   const dropdownLinks = ["Chaotic Thoughts", "So Finance", "Reviews", "FAQ"];

//   const fetchBlogData = async () => {
//     // for (let i = 0; i < blog_data.length; i++) {
//     //   if (Number(id) === blog_data[i].id) {
//     //     setData(blog_data[i]);
//     //     console.log(blog_data[i]);
//     //     break;
//     //   }
//     // }

//     const response = await axios.get('/api/blog', {
//       params:{
//         id:params.id
//       }
//     });
//     setData(response.data);
//   };

//   useEffect(() => {
//     fetchBlogData();
//   }, []);

//   return data ? (
//     <>
//       <div className="bg-gray-200 pb-5">
        
//         {/* ✅ Navbar */}
//         <Header />
        

//         {/* Blog Content */}
//         <div className="text-center my-24 py-5 px-5 md:px-12 lg:px-28">
//           <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
//             {data.title}
//           </h1>
//           <Image
//             src={data.authorImg}
//             alt="Author Img"
//             width={150}
//             height={150}
//             className="mx-auto mt-6 border border-white rounded-full"
//           />
//           <p className="mt-2.5 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
//         </div>
//       </div>

//       <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
//         <Image
//           src={data.image}
//           width={1280}
//           height={720}
//           alt=""
//           className="border-4 border-white"
//         />

//         {/* ✅ Render description with spacing / bullet points */}
//         <div className="my-8 space-y-4 text-gray-800 leading-relaxed">
//           {data.description
//             ?.split("\n") // split on new lines
//             .map((line, index) => (
//               <p key={index} className="text-base">
//                 {line}
//               </p>
//             ))}
//         </div>

//         {/* <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
//         <p>{data.description}</p> */}
//         {/* <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3> */}
//         {/* <p className="my-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
//           voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
//           velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
//         <p className="my-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
//           voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
//           velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
//         <p className="my-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
//           voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
//           velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
//         </p>
//         <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
//         <p className="my-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque
//           voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque
//           velit ipsam? Eum rerum dolor debitis ab harum minima itaque!
//         </p> */}
//         <div className="my-24">
//           <p className="text-black font font-semibold my-4">
//             Share this article on social media
//           </p>
//           <div className="flex">
//             <Image src={assets.facebook_icon} width={50} alt="facebook_icon" />
//             <Image src={assets.twitter_icon} width={50} alt="twitter_icon" />
//             <Image src={assets.googleplus_icon} width={50} alt="googleplus_icon" />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   ) : (
//     <></>
//   );
// };

// export default Page;