"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ menu, setMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const colors = ["#000", "#DD7BDF", "#BADFDB", "#FFA4A4", "#B3BFFF"];

  const leftNavItems = [
    {
      title: "About",
      subtopics: [
        { label: "Our Story", path: "/about#ourstory" },
        { label: "Meet the Team", path: "/about#meettheteam" },
        { label: "Contact", path: "/about#contact" },
      ],
    },
    {
      title: "Career",
      subtopics: [
        { label: "Internships", path: "/career/internships" },
        { label: "Remote Work", path: "/career/remote-work" },
        { label: "Freelance Tips", path: "/career/freelance" },
      ],
    },
    {
      title: "Money & Finance",
      subtopics: [
        { label: "Budgeting", path: "/finance/budgeting" },
        { label: "Saving", path: "/finance/saving" },
        { label: "Investing Basics", path: "/finance/investing" },
      ],
    },
    {
      title: "Almost Adult",
      subtopics: [
        { label: "Relationships", path: "/adult/relationships" },
        { label: "Mental Health", path: "/adult/mental-health" },
        { label: "Adulting Tips", path: "/adult/tips" },
      ],
    },
  ];

  const rightNavItems = [
    {
      title: "Mind Dump",
      subtopics: [
        { label: "Random Thoughts", path: "/mind/random" },
        { label: "Reflections", path: "/mind/reflections" },
      ],
    },
    {
      title: "Everyday Stuff",
      subtopics: [
        { label: "Wellness", path: "/wellness" },
        { label: "Home & Decor", path: "/home" },
        { label: "Travel", path: "/travel" },
        { label: "Lifestyle", path: "/lifestyle" },
      ],
    },
  ];

  const renderNavItems = (navItems) =>
    navItems.map((item, index) => {
      const color = colors[index % colors.length];
      const isActive = pathname.startsWith(item.path || "");
      const hasDropdown = item.subtopics.length > 0;

      return (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setActiveDropdown(item.title)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            href={item.path || "#"}
            className={`text-lg font-medium px-4 py-1 transition-all duration-200`}
          >
            {item.title}
            {hasDropdown && (
              <ChevronDown className="inline-block ml-1 w-4 h-4" />
            )}
          </Link>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {activeDropdown === item.title && hasDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 w-56 rounded-lg shadow-lg p-3 space-y-2 bg-white"
              >
                {item.subtopics.map((sub) => (
                  <Link
                    key={sub.path}
                    href={sub.path}
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 rounded-md transition text-black hover:text-white"
                    style={{
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {sub.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });

  return (
    <nav
      className="
        bg-white shadow-sm w-full z-50 
        border-b border-gray-200 
        [@media(min-width:1200px)]:border-none
      "
    >
      {/* ↑ Added [@media(min-width:1200px)]:border-none to remove bottom border on desktop */}

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Nav - visible only from 1200px and above */}
          <div className="hidden [@media(min-width:1200px)]:flex space-x-6">
            {renderNavItems(leftNavItems)}
          </div>

          {/* Center Logo */}
          <div className="shrink-0 text-2xl font-bold text-gray-900 mx-auto [@media(min-width:1200px)]:mx-0">
            <Link href="/" onClick={() => setMenu("All")}>
              <Image
                src={assets.ozioma_black}
                width={200}
                alt="title-image"
                className="w-[220px] sm:w-[270px]"
              />
            </Link>
          </div>

          {/* Right Nav + Search + Button - visible only from 1200px */}
          <div className="hidden [@media(min-width:1200px)]:flex items-center space-x-6">
            {renderNavItems(rightNavItems)}

            <div className="flex items-center gap-4">
              <Link
                href="/admin/addProduct"
                className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
                border-solid border-black shadow-[-7px_7px_0px_#000000]"
              >
                Get Started
                <Image src={assets.arrow} alt="arrow" />
              </Link>

              {/* {user ? (
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold uppercase">
                  {user.name?.charAt(0)}
                </div>
              ) : (
                <Link href={`/login?redirect=${pathname}`} className="font-semibold">
                  Login
                </Link>
              )} */}

              {user ? (
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold uppercase cursor-pointer">
                    {user.name?.charAt(0)}
                  </div>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                    <Link
                      href="/logout"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <Link href={`/login?redirect=${pathname}`} className="font-semibold">
                  Login
                </Link>
              )}

            </div>


            <motion.button
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full border hover:bg-gray-100 transition"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </motion.button>
          </div>

          {/* Mobile Header - below 1200px */}
          <div className="flex [@media(min-width:1200px)]:hidden w-full justify-between items-center absolute left-0 px-4 top-0 h-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown (below 1200px) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="[@media(min-width:1200px)]:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3 text-xl font-semibold">
              {[...leftNavItems, ...rightNavItems].map((category, index) => {
                const color = colors[index % colors.length];
                return (
                  <div
                    key={category.title}
                    className="pb-3 border-b"
                    style={{ borderColor: color }}
                  >
                    <p
                      className="font-bold text-lg px-3 py-2 rounded-md"
                      style={{
                        color: color,
                      }}
                    >
                      {category.title}
                    </p>
                    <div className="mt-1 grid grid-cols-2 gap-3">
                      {category.subtopics.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`block uppercase text-gray-700 text-sm px-2 py-1 rounded-md transition ${pathname === sub.path ? "font-bold" : ""
                            }`}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = color)
                          }
                          onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "transparent")
                          }
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center gap-4">
                <Link
                  href="/admin/addProduct"
                  className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border 
                  border-solid border-black shadow-[-7px_7px_0px_#000000]"
                >
                  Get Started
                  <Image src={assets.arrow} alt="arrow" />
                </Link>

                {user ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold uppercase">
                      {user.name?.charAt(0)}
                    </div>
                    <Link
                      href="/logout"
                      className="block text-red-600 font-semibold mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link href={`/login?redirect=${pathname}`} className="font-semibold">
                    Login
                  </Link>
                )}

              </div>



            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
