import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href='/' className='cursor-pointer'>
            <Image 
                src={assets.ozioma} width={190} 
                alt='title-image' className='w-[130px] sm:w-auto'  
            />
        </Link>
        <div className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 space-x-8'>
              <Link href='/' className='cursor-pointer'>About</Link>
              <Link href='/' className='cursor-pointer'>Contact</Link>
        </div>
        <button 
            className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
            border-solid border-black shadow-[-7px_7px_0px_#FF6F61]'>
                Subscribe
                {/* <Image src={assets.arrow} alt='image' /> */}
        </button>
      </div>
      <div className='text-center my-10'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-6 max-w-[740px] m-auto text-xs sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias, 
            maxime amet inventore ab quam voluptates est ratione consequatur.
        </p>
        <form 
            className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border
            border-black shadow-[-7px_7px_0px_#FF6F61]' action="">
                <input type="email" placeholder='Enter your email' 
                className='pl-4 outline-none' name="" id="" />
                <button type='submit'
                    className='border-l cursor-pointer border-black py-4 px-4 sm:px-8 active:bg-gray-600 
                    active:text-white'>
                    Subscribe
                </button>
        </form>
      </div>
    </div>
  )
}

export default Header
