// 'use client'
// import { assets } from '@/Assets/assets'
// import ProtectedAdmin from '@/Components/ProtectedAdmin'
// import axios from 'axios'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const Page = () => {

//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     category: "Internships",
//     author: "Ozioma Ulu",
//     authorImg: "/author_img.png",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//     console.log(data);
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('title', data.title);
//       formData.append('description', data.description);
//       formData.append('category', data.category);
//       formData.append('author', data.author);
//       formData.append('authorImg', data.authorImg);
//       formData.append('image', image);

//       const response = await axios.post('https://blog-loxs.onrender.com/api/blog', formData);
//       if (response.data.success) {
//         toast.success(response.data.msg || "Blog added successfully!");
//         setImage(false);
//         setData({
//           title: "",
//           description: "",
//           category: "Internships",
//           author: "Ozioma Ulu",
//           authorImg: "/author_img.png",
//         });
//       } else {
//         toast.error("Error adding blog!");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <ProtectedAdmin>
//         <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
//           <p className='text-xl'>Upload Thumbnail</p>
//           <label htmlFor="image">
//             <Image
//               className='mt-4'
//               src={!image ? assets.upload_area : URL.createObjectURL(image)}
//               width={140}
//               height={70}
//               alt=''
//             />
//           </label>
//           <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />

//           <p className='text-xl mt-4 font-bold'>Blog Title</p>
//           <input
//             name='title'
//             onChange={onChangeHandler}
//             value={data.title}
//             className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
//             type="text"
//             placeholder='Type Here'
//             required
//           />

//           <p className='text-xl mt-4 font-bold'>Blog Description</p>
//           <textarea
//             name='description'
//             onChange={onChangeHandler}
//             value={data.description}
//             className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
//             type="text"
//             placeholder='Write Content Here'
//             rows={6}
//             required
//           />

//           <p className='text-xl mt-4'>Blog Category</p>
//           <select
//             name="category"
//             onChange={onChangeHandler}
//             value={data.category}
//             className='w-40 mt-4 px-4 py-3 border text-gray-500'
//           >
//             <option value="Internships">Internships</option>
//             <option value="Remote Work">Remote Work</option>
//             <option value="Freelance Tips">Freelance Tips</option>
//             <option value="Budgeting">Budgeting</option>
//             <option value="Savings">Savings</option>
//             <option value="Investing Basics">Investing Basics</option>
//             <option value="Relationships">Relationships</option>
//             <option value="Mental Health">Mental Health</option>
//             <option value="Adulting Tips">Adulting Tips</option>
//             <option value="Reflections">Reflections</option>
//             <option value="Wellness">Wellness</option>
//             <option value="Home & Decor">Home & Decor</option>
//             <option value="Travel">Travel</option>
//             <option value="Chaotic Thoughts">Chaotic Thoughts</option>
//             <option value="Lifestyle">Lifestyle</option>
//           </select>
//           <br />
//           <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
//         </form>

//         {/* ✅ Toast container added here */}
//         <ToastContainer position="top-center" autoClose={3000} />
//       </ProtectedAdmin>
//     </>
//   );
// };

// export default Page;

'use client';
import { assets } from '@/Assets/assets';
import ProtectedAdmin from '@/Components/ProtectedAdmin';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlogPage = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Internships",
    author: "Ozioma Ulu",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("authorImg", data.authorImg);
      if (image) formData.append("image", image);

      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setData({
          title: "",
          description: "",
          category: "Internships",
          author: "Ozioma Ulu",
          authorImg: "/author_img.png",
        });
        setImage(null);
      } else {
        toast.error(response.data.msg || "Failed to add blog");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <ProtectedAdmin>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            width={140}
            height={70}
            alt="thumbnail"
          />
        </label>
        <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />

        <p className="text-xl mt-4 font-bold">Blog Title</p>
        <input
          name="title"
          value={data.title}
          onChange={onChangeHandler}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Type here"
          required
        />

        <p className="text-xl mt-4 font-bold">Blog Description</p>
        <textarea
          name="description"
          value={data.description}
          onChange={onChangeHandler}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          rows={6}
          placeholder="Write content here"
          required
        />

        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          value={data.category}
          onChange={onChangeHandler}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Internships">Internships</option>
          <option value="Remote Work">Remote Work</option>
          <option value="Freelance Tips">Freelance Tips</option>
          <option value="Budgeting">Budgeting</option>
          <option value="Savings">Savings</option>
          <option value="Investing Basics">Investing Basics</option>
          <option value="Relationships">Relationships</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Adulting Tips">Adulting Tips</option>
          <option value="Reflections">Reflections</option>
          <option value="Wellness">Wellness</option>
          <option value="Home & Decor">Home & Decor</option>
          <option value="Travel">Travel</option>
          <option value="Chaotic Thoughts">Chaotic Thoughts</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">ADD</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </ProtectedAdmin>
  );
};

export default AddBlogPage;
