// 'use client'
// import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
// import ProtectedAdmin from '@/Components/ProtectedAdmin';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'

// const page = () => {

//   const [blogs, setBlogs] = useState([]);


//   const fetchBlogs = async () => {
//     const response = await axios.get('/api/blog');
//     setBlogs(response.data.blogs)
//   }

//   const deleteBlog = async (mongoId) => {
//     const response = await axios.delete('/api/blog', {
//       params:{
//         id:mongoId
//       }
//     })
//     toast.success(response.data.msg);
//     fetchBlogs();
//   }

//   useEffect(()=>{
//     fetchBlogs();
//   }, []);

//   return (
//     <ProtectedAdmin>
//       <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 '>
//         <h1>All Blogs</h1>
//         <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 
//         scrollbar-hide '>
//           <table className='w-full text-sm text-gray-500'>
//             <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
//               <tr>
//                 <th scope='col' className='hidden sm:block px-6 py-3 '>Author Name</th>
//                 <th scope='col' className='px-6 py-3 '>Blog Title</th>
//                 <th scope='col' className='px-6 py-3 '>Date</th>
//                 <th scope='col' className='px-6 py-3 '>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map((item, index) => {
//                 return <BlogTableItem 
//                   key={index} 
//                   mongoId={item._id} 
//                   title={item.title} 
//                   author={item.author} 
//                   authorImg={item.authorImg} 
//                   date={item.date}
//                   deleteBlog={deleteBlog}
//                 />
//               })} 
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </ProtectedAdmin>

//   )
// }

// export default page

'use client';
import ProtectedAdmin from '@/Components/ProtectedAdmin';
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('latest'); // 'latest' or 'oldest'
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // loading state
  const blogsPerPage = 9; // Show 9 per page

  const fetchBlogs = async () => {
    try {
      setLoading(true); // start loading
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs || []);
      setLoading(false); // done loading
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch blogs');
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete('/api/blog', { params: { id } });
      if (response.data.success) {
        toast.success(response.data.msg);
        fetchBlogs();
      } else {
        toast.error(response.data.msg);
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete blog');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on search term and sort
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });

  // Pagination logic
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <ProtectedAdmin>
      <div className="flex-1 pt-2 px-5 sm:pt-0 sm:pl-16">
        <h1 className="text-2xl font-bold mb-4 text-purple-600">🌸 All Blogs 🌸</h1>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset page on search
            }}
            className="w-full sm:w-[300px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2 sm:mb-0"
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full sm:w-[200px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="latest">Latest → Oldest</option>
            <option value="oldest">Oldest → Latest</option>
          </select>
        </div>

        {/* Table */}
        <div className="relative h-[70vh] max-w-[900px] overflow-x-auto overflow-y-auto mt-4 border border-gray-300 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
          {loading ? (
            // Cute loading spinner
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-b-4 border-purple-300"></div>
              <span className="ml-4 text-purple-600 text-lg font-semibold">🌸 Loading blogs... 🌸</span>
            </div>
          ) : (
            <table className="w-full text-sm text-gray-600">
              <thead className="text-sm text-gray-700 text-left uppercase bg-purple-50 sticky top-0">
                <tr>
                  <th className="hidden sm:block px-6 py-3">Author</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentBlogs.length ? (
                  currentBlogs.map((item) => (
                    <BlogTableItem
                      key={item._id}
                      mongoId={item._id}
                      title={item.title}
                      author={item.author}
                      authorImg={item.authorImg}
                      date={item.date}
                      deleteBlog={deleteBlog}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-400">
                      No blogs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 rounded-lg bg-purple-200 disabled:bg-gray-200 hover:bg-purple-300"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === idx + 1
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-100 hover:bg-purple-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 rounded-lg bg-purple-200 disabled:bg-gray-200 hover:bg-purple-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </ProtectedAdmin>
  );
};

export default BlogListPage;
