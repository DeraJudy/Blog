"use client"
import { use } from 'react'; // ✅ Import use() => chatgpt
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';

const page = ({params}) => {

    const { id } = use(params); // ✅ Unwrap params=> chatgpt
    
    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) 
        {
            // if (Number(params.id)===blog_data[i].id) {
            //     setData(blog_data[i]);
            //     console.log(blog_data[i]);
            //     break;
            // }
            if (Number(id) === blog_data[i].id) { // ✅ Use unwrapped id => chatgpt
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }

    // useEffect(() => {
    //     fetchBlogData();
    // }, [])

    React.useEffect(() => {
        fetchBlogData();
    }, []);

  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
      <div className='flex justify-between items-center'>
        <Link href='/' className='cursor-pointer'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
        </Link>
        <button className='flex items-center gap-2 font-medium px-3 
        py-1 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] '>
            Get Started
            <Image src={assets.arrow} alt='arrow' />
        </button>
      </div>

      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
            {data.title}
        </h1>
        <Image src={data.author_img} alt='Author Img' width={150} height={150}
        className='mx-auto mt-6 border border-white rounded-full'/>
        <p className='mt-2.5 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>    
        <Image src={data.image} width={1280} height={720} alt='' 
        className='border-4 border-white'/>
        <h1 className='my-8 text-[26] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold '> Step 1: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
            voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
            Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <h3 className='my-5 text-[18px] font-semibold '> Step 2: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
            voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
            Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <h3 className='my-5 text-[18px] font-semibold '> Step 3: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
            voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
            Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <h3 className='my-5 text-[18px] font-semibold '> Conclusion:</h3>
        <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque 
            voluptates tempora! Saepe soluta qui nisi obcaecati asperiores nihil eaque velit ipsam? 
            Eum rerum dolor debitis ab harum minima itaque!
        </p>
        <div className='my-24'>
            <p className='text-black font font-semibold my-4'>
                Share this article on social media
            </p>
            <div className='flex'>
                <Image src={assets.facebook_icon} width={50} alt="facebook_icon" />
                <Image src={assets.twitter_icon} width={50} alt="twitter_icon" />
                <Image src={assets.googleplus_icon} width={50} alt="googleplus_icon" />
            </div>
        </div>
    </div>
    <Footer />
    </>:<></>
  )
}

export default page
