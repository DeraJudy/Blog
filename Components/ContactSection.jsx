import React from 'react'
import { Mail, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white pb-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Contact Info */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            We love getting emails from you guys
          </h2>
          <p className="text-gray-600">
            Please feel free to write to us at{" "}
            <a
              href="mailto:hello@oziomapov.com"
              className="text-[#FF6F61] hover:underline hover:text-[#0ABAB5] "
            >
              hello@oziomapov.com
            </a>
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Subscribe</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="max-w-md mx-auto flex rounded-lg overflow-hidden shadow-md"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
            />
            <button
              type="submit"
              className="bg-[#0ABAB5] text-white px-8 py-3 sm:py-3 sm:px-6 hover:bg-[#FF6F61] transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Let's Hang Out Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Let’s Hang Out
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF6F61]"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0ABAB5]"
            >
              <Twitter className="w-7 h-7" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF6F61]"
            >
              <Facebook className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0ABAB5]"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
