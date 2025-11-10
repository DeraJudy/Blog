// import { ConnectDB } from "@/lib/config/db";
// import Comment from "@/models/Comment";
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     await ConnectDB();

//     const token = req.cookies.get("token")?.value;
//     if (!token) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     const { content } = await req.json();

//     const comment = new Comment({ name: user.name, email: user.email, content });
//     await comment.save();

//     return NextResponse.json({ message: "Comment added successfully" });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function GET() {
//   await dbConnect();
//   const comments = await Comment.find().sort({ createdAt: -1 });
//   return NextResponse.json(comments);
// }


import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { ConnectDB } from "@/lib/config/db";
import Comment from "@/lib/models/Comment";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("blogId");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 5;

    const skip = (page - 1) * limit;

    const comments = await Comment.find({ blogId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Comment.countDocuments({ blogId });

    return NextResponse.json({
      comments,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await ConnectDB();

    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ error: "Login required" }, { status: 401 });

    const user = jwt.verify(token, process.env.JWT_SECRET);
    const { comment, blogId } = await req.json();  // ✅ use comment, not content

    const newComment = new Comment({
      name: user.name,
      email: user.email,
      comment,   // ✅ matches schema
      blogId,
    });

    await newComment.save();

    return NextResponse.json({ message: "✅ Comment Added" });
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

