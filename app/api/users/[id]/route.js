import { ConnectDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    await ConnectDB();
    const { id } = params;
    const { role } = await req.json();

    const user = await User.findByIdAndUpdate(id, { role }, { new: true, runValidators: true });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ message: "User role updated", user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  try {
    await ConnectDB();
    const { id } = params;

    const user = await User.findByIdAndDelete(id);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}