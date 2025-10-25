'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Internships",
    author: "Ozioma Ulu",
    authorImg: "/author_img.png",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    // to stop it from refreshing anytime you click on the ADD button
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);
    const response = await axios.post('https://blog-loxs.onrender.com/api/blog', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "So Finance",
        author: "Ozioma Ulu",
        authorImg: "/author_img.png",
      });
    }
    else {
      toast.error("Error");
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
      <p className='text-xl'>Upload Thumbnail</p>
      <label htmlFor="image">
        <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='' />
      </label>
      <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
      <p className='text-xl mt-4 font-bold'>Blog Title</p>
      <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type="text" 
      placeholder='Type Here' required />
      <p className='text-xl mt-4 font-bold'>Blog Description</p>
      <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' 
      type="text" placeholder='Write Content Here' rows={6} required />
      <p className='text-xl mt-4'>Blog Category</p>
      <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
        <option value="So Finance">Internships</option>
        <option value="So Finance">Remote Work</option>
        <option value="So Finance">Freelance Tips</option>
        <option value="So Finance">Budgeting</option>
        <option value="So Finance">Savings</option>
        <option value="So Finance">Investing Basics</option>
        <option value="So Finance">Relationships</option>
        <option value="So Finance">Mental Health</option>
        <option value="So Finance">Adulting Tips</option>
        <option value="So Finance">Reflections</option>
        <option value="So Finance">Wellness</option>
        <option value="So Finance">Home & Decor</option>
        <option value="So Finance">Travel</option>
        <option value="Chaotic Thoughts">Chaotic Thoughts</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type='submit' className='mt-8 w-40 h-12 bg-black text-white '>ADD</button>
    </form>
  )
}

export default page
