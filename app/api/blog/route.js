// Apis to manage blogs posts

import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
import {writeFile} from 'fs/promises';
const fs = require('fs')

const LoadDB = async () => {
    // Simulate database loading
    await ConnectDB();
    console.log("Database Loaded");
};

// Load the database when the module is imported
// This ensures the DB connection is established once
LoadDB();

// API ENDPOINT to get all blogs
export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id")
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
    }

}

// API ENDPOINT FOR UPLOADING BLOGS
export async function POST(request) {

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    // console.log(imgUrl);

        const blogData = {
            title:`${formData.get('title')}`,
            description:`${formData.get('description')}`,
            category:`${formData.get('category')}`,
            author:`${formData.get('author')}`,
            image: `${imgUrl}`,
            authorImg:`${formData.get('authorImg')}`
        }

        await BlogModel.create(blogData);
        console.log("Blog Saved")

    return NextResponse.json({success:true,msg:"Blog Added"})
}

// Creating API endpoint to delete blog
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, ()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Article Deleted"});
}