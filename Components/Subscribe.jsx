import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Subscribe = () => {

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
        <div className='text-center my-10'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-6 max-w-[740px] m-auto text-xs sm:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias,
                maxime amet inventore ab quam voluptates est ratione consequatur.
            </p>
            <form onSubmit={OnSubmitHandler}
                className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border
            border-black shadow-[-7px_7px_0px_#000000]' action="">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email'
                    className='pl-4 outline-none' name="" id="" />
                <button onSubmit={OnSubmitHandler} type='submit'
                    className='border-l cursor-pointer border-black py-4 px-4 sm:px-8 active:bg-gray-600 
                    active:text-white'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default Subscribe
