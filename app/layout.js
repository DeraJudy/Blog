// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "OziomaPov",
  description: "Oziomapov is a space where ideas collide — from unfiltered takes on everyday life to smart money moves and lifestyle stories that inspire balance. Whether it’s navigating finance with clarity, unpacking chaotic thoughts, or embracing the little joys of living, this blog is all about keeping it real and intentional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
