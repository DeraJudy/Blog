import { ConnectDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 400 });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return NextResponse.json({ error: "Invalid password" }, { status: 400 });

    // const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET, {
    //   expiresIn: "7d",
    // });

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
    message: "Login successful",
    user: {
      name: user.name,
      email: user.email,
      role: user.role // <--- this is key
    }

  });

    res.cookies.set("token", token, { httpOnly: true, path: "/" });

    return res;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}