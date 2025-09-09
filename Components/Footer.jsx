import { assets } from '@/Assets/assets'
import Link from "next/link";
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#0ABAB5] py-5 items-center'>
      <Image src={assets.ozioma_black} alt='' width={160} />
      <div>
        <p className='text-sm text-black'>All rights reserved. Copyright © oziomapov </p>
        <Link href='' className='text-sm text-black' >
            Designed by C.L.U.J
        </Link>
      </div>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt='Social_Media_Icon' width={40} />
        <Image src={assets.twitter_icon} alt='Social_Media_Icon' width={40} />
        <Image src={assets.googleplus_icon} alt='Social_Media_Icon' width={40} />

      </div>
    </div>
  )
}

export default Footer
