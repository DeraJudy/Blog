import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    
  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('All')} 
        className={menu==="All"?'bg-[#FF6F61] text-white py-1 px-4 rounded-sm':""}>
            All
        </button>
        <button onClick={() => setMenu('So Finance')} 
         className={menu==="So Finance"?'bg-[#FF6F61] text-white py-1 px-4 rounded-sm':""}>
            So Finance
        </button>
        <button onClick={() => setMenu('Chaotic Thoughts')}
        className={menu==="Chaotic Thoughts"?'bg-[#FF6F61] text-white py-1 px-4 rounded-sm':""}>Chaotic Thoughts</button>
        <button onClick={() => setMenu('Lifestyle')}
        className={menu==="Lifestyle"?'bg-[#FF6F61] text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item) => menu==="All"?true:item.category===menu ).map((item,index) => {
            return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} 
            category={item.category}  />
        })}
      </div>
    </div>
  )
}

export default BlogList
