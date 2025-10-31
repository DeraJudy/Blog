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
        <div className='text-center my-12'>
            <h1 className='text-3xl sm:text-4xl font-medium'>From My Mind To Yours</h1>
            <p className='mt-6 max-w-[740px] px-7 m-auto text-xs sm:text-base'>
                Pull up a chair — I write about the things we all think about every day 
                but rarely say out loud. From everyday moments to money talks, from passion 
                and struggles to the small wins that keep us going, each post is a pause to breathe, 
                reflect, and find a bit of yourself in my words.
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
