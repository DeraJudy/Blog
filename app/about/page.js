// app/about/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import { Twitter, Mail, Linkedin, Heart, Sparkles, Users } from "lucide-react";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";
import { useEffect } from "react";

const Page = () => {

   // Optional: smooth scroll on mount if user came with a hash (e.g., #meettheteam)
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const team = [
  {
    name: "Chidera Ulu",
    role: "Frontend Developer",
    image: "/images/chidera.jpg",
  },
  {
    name: "Jane Doe",
    role: "Project Manager",
    image: "/images/jane.jpg",
  },
  {
    name: "John Smith",
    role: "Backend Engineer",
    image: "/images/john.jpg",
  },
];

  return (
    <main className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <section id="ourstory" className="relative bg-[#0ABAB5] text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            About Ozioma Pov
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Ozioma Pov is a lifestyle blog that explores everything from style and culture to food, travel, 
            relationships, adulting, and all the moments in between. 
            We’re here to share our experiences, thoughts, and passions—and we hope you’ll share yours too. 
            Our goal is to create a space that’s not only informative, but also entertaining, inspiring, and deeply relatable.
          </p>
        </div>
      </section>


      {/* Author Section */}
      {/* <section className="max-w-4xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col sm:flex-row items-center 
        gap-8 hover:shadow-2xl transition-all">
          <Image
            src="/author.jpg"
            alt="Portrait of Ozioma Ulu"
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-white dark:border-[#FF6F61] shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2 mt-3 text-[#FF6F61] ">Meet Ozioma Ulu</h2>
            <p className="text-black mb-4 leading-relaxed max-w-prose">
              Ozioma always dreamed of having her own little corner of the
              internet—a space to share her thoughts, passions, and everyday
              experiences. Ozioma Pov is that dream realized: a daily lifestyle
              site where she writes about style, food, travel, relationships,
              and the adventures of adulting. She’s thrilled you’re here—grab a
              seat, stay awhile, and let’s chat!
            </p>
            <div className="flex gap-5 text-gray-500 dark:text-gray-400">
              <a
                href="https://twitter.com/username"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="hover:text-red-500"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </section> */}



      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-[#FF6F61] text-center">
          Our Mission
        </h2>
        <p className="text-black leading-relaxed mb-14 max-w-2xl mx-auto text-center">
          At Ozioma Pov, we know life can get overwhelming—and sometimes all you need is a little escape. 
          That’s why we’ve created a cozy corner where you can pause, unwind, and enjoy a mix of inspiration, 
          laughter, and real-life relatability.
        </p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <Heart className="mx-auto text-pink-500 mb-4" size={32} />
            <h3 className="font-semibold text-xl mb-2 text-[#FF6F61]">Our Promise</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We’ll always keep it real—sharing struggles, wins, and lessons
              learned with honesty and empathy.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <Sparkles className="mx-auto text-purple-500 mb-4" size={32} />
            <h3 className="font-semibold text-xl mb-2 text-[#FF6F61]">Creativity</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              From style to food to culture, we love exploring new ideas and
              bringing a spark of creativity to daily life.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <Users className="mx-auto text-indigo-500 mb-4" size={32} />
            <h3 className="font-semibold text-xl mb-2 text-[#FF6F61]">Community</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This is a place to connect, share, and grow together. Grab your
              favorite drink and join the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      {/* <section id="meettheteam" className="space-y-10 mb-44">
        <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}

      <ContactSection id="contact" />

      <Footer />
      
    </main>
  );
};

export default Page;
