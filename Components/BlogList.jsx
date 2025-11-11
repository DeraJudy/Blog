import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';
import { Import } from 'lucide-react';

const BlogList = ({ menu, setMenu }) => {

  // const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs)
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div>

      {/* <div className='flex flex-wrap mt-10'>
        <BlogSlider blogs={blogs} menu={menu} />
      </div> */}

      {/* <div className="flex justify-center gap-6 my-10">
        <button onClick={() => setMenu('All')}
          className={menu === "All" ? 'bg-[#FF6F61] text-white py-1 px-4 rounded-sm' : ""}>
          All
        </button>
        <button onClick={() => setMenu('So Finance')}
          className={menu === "So Finance" ? 'bg-[#FF6F61] text-white py-1 px-4 rounded-sm' : ""}>
          So Finance
        </button>
        <button onClick={() => setMenu('Chaotic Thoughts')}
          className={menu === "Chaotic Thoughts" ? 'bg-[#FF6F61] text-white py-1 px-4 rounded-sm' : ""}>
          Chaotic Thoughts
        </button>
        <button onClick={() => setMenu('Lifestyle')}
          className={menu === "Lifestyle" ? 'bg-[#FF6F61] text-white py-1 px-4 rounded-sm' : ""}>
          Lifestyle
        </button>
      </div> */}

      {/* Sample Data from assets */}
      {/* <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
          return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description}
            category={item.category} />
        })}
      </div> */}
      
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 my-12">
        {blogs
          .filter((item) => menu === "All" ? true : item.category === menu)
          .map((item, index) => {
            const shortDescription =
              item.description.split(" ").slice(0, 15).join(" ") + "...";

            return (
              <BlogItem
                key={index}
                id={item._id}
                image={item.image}
                title={item.title}
                description={shortDescription}
                category={item.category}
              />
            );
          })}
      </div>

    </div>
  )
}

export default BlogList
