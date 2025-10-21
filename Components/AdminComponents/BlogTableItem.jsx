import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {
    const BlogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon} alt='Author Image' />
        
        <p>{author?author:"No author"}</p>
      </th>
      <td className='px-6 py-4'>
        {title?title:"No title"}
      </td>
      <td className='px-6 py-4'>
        {BlogDate.toDateString()}
      </td>

      <td className=" px-2 py-4 ">
        <button
          onClick={() => deleteBlog(mongoId)}
          className="p-2 rounded hover:bg-red-100 transition"
          aria-label="Delete Blog"
        >
          <MdDelete size={22} color="red" />
        </button>
      </td>

      {/* <td className="pr-6 py-4 ">
        <button
          className="p-2 rounded hover:bg-green-100 transition"
          aria-label="Edit Blog"
        >
          <MdEdit size={22} color="green" />
        </button>
      </td> */}

    </tr>
  )
}

export default BlogTableItem
