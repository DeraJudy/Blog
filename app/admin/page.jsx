import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <div>
      <ToastContainer  position="top-center" autoClose={3000} />
    </div>
  )
}

export default page
