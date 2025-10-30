import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer theme="dark" />
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <div className="flex flex-col w-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full py-4 px-6 sm:px-12 border-b border-black bg-white sticky top-0 z-10">
            <h3 className="text-lg ml-12 font-semibold">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="Profile" />
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-8">{children}</div>
        </div>
      </div>
    </>
  );
}
