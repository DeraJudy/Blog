// // Apis to manage blogs posts

// import { ConnectDB } from "@/lib/config/db";
// import BlogModel from "@/lib/models/BlogModel";
// const { NextResponse } = require("next/server");
// import {writeFile} from 'fs/promises';
// const fs = require('fs')

// const LoadDB = async () => {
//     // Simulate database loading
//     await ConnectDB();
//     console.log("Database Loaded");
// };

// // Load the database when the module is imported
// // This ensures the DB connection is established once
// LoadDB();

// // API ENDPOINT to get all blogs
// export async function GET(request) {

//     const blogId = request.nextUrl.searchParams.get("id")
//     if (blogId) {
//         const blog = await BlogModel.findById(blogId);
//         return NextResponse.json(blog);
//     }
//     else{
//         const blogs = await BlogModel.find({});
//         return NextResponse.json({blogs})
//     }

// }

// // API ENDPOINT FOR UPLOADING BLOGS
// export async function POST(request) {

//     const formData = await request.formData();
//     const timestamp = Date.now();

//     const image = formData.get('image');
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);
//     const path = `./public/${timestamp}_${image.name}`;
//     await writeFile(path,buffer);
//     const imgUrl = `/${timestamp}_${image.name}`;
//     // console.log(imgUrl);

//         const blogData = {
//             title:`${formData.get('title')}`,
//             description:`${formData.get('description')}`,
//             category:`${formData.get('category')}`,
//             author:`${formData.get('author')}`,
//             image: `${imgUrl}`,
//             authorImg:`${formData.get('authorImg')}`
//         }

//         await BlogModel.create(blogData);
//         console.log("Blog Saved")

//     return NextResponse.json({success:true,msg:"Blog Added"})
// }

// // Creating API endpoint to delete blog
// export async function DELETE(request) {
//     const id = await request.nextUrl.searchParams.get('id');
//     const blog = await BlogModel.findById(id);
//     fs.unlink(`./public${blog.image}`, ()=>{});
//     await BlogModel.findByIdAndDelete(id);
//     return NextResponse.json({msg:"Blog Article Deleted"});
// }

// Project URL
// https://lnupvyukogsvwqfnomdq.supabase.co

// anon public key
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudXB2eXVrb2dzdndxZm5vbWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzOTU1MzIsImV4cCI6MjA3Njk3MTUzMn0.WyQakNUCS_qiZgknGT7GyTsKCsQ-fRqrJt5SYdhk0CY

// /api/blog/route.js  (or whatever path you're using)
// Apis to manage blogs posts

import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

setInterval(() => {
  fetch("https://blog-loxs.onrender.com");
}, 10 * 60 * 1000);


// Initialize Supabase client (server-side)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // server-only
);

const BUCKET = process.env.SUPABASE_BUCKET || "blog-images"; // bucket name

// Ensure DB connection once
const LoadDB = async () => {
  await ConnectDB();
  console.log("Database Loaded");
};
LoadDB();

// GET: fetch blogs or single blog by id
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// POST: upload image to Supabase storage, save blog doc
export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image"); // File object or null

    let imgUrl = "";
    let supabasePath = ""; // store filename/path in DB so we can delete later

    if (imageFile && imageFile.size) {
      // Convert to buffer
      const imageBytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(imageBytes);

      // Create a unique filename
      const timestamp = Date.now();
      const originalName = imageFile.name.replace(/\s+/g, "_");
      const fileName = `${timestamp}_${originalName}`;

      // Upload to Supabase bucket
      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(fileName, buffer, {
          contentType: imageFile.type,
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Supabase upload error:", uploadError);
        return NextResponse.json({ success: false, msg: "Image upload failed" });
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
      imgUrl = publicUrlData?.publicUrl || "";
      supabasePath = fileName;
    }

    const blogData = {
      title: `${formData.get("title") || ""}`,
      description: `${formData.get("description") || ""}`,
      category: `${formData.get("category") || ""}`,
      author: `${formData.get("author") || ""}`,
      image: imgUrl, // public URL
      supabasePath, // used later for delete
      authorImg: `${formData.get("authorImg") || ""}`,
    };

    await BlogModel.create(blogData);
    console.log("Blog Saved");
    return NextResponse.json({ success: true, msg: "Blog Added", data: blogData });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ success: false, msg: "Something went wrong" });
  }
}

// DELETE: remove blog doc and delete file from Supabase storage
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, msg: "Missing id" });

    const blog = await BlogModel.findById(id);
    if (!blog) return NextResponse.json({ success: false, msg: "Blog not found" });

    // If we have a stored supabasePath, delete the file from storage
    if (blog.supabasePath) {
      const { error: removeError } = await supabase.storage.from(BUCKET).remove([blog.supabasePath]);
      if (removeError) {
        console.warn("Failed to remove file from Supabase:", removeError);
        // continue to delete DB record even if file deletion fails, or return error — your choice
      } else {
        console.log("Removed file from Supabase:", blog.supabasePath);
      }
    } else {
      console.log("No supabasePath found for blog, skipping file deletion");
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Blog Article Deleted" });
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json({ success: false, msg: "Something went wrong" });
  }
}
