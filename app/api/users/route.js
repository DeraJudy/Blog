// import { ConnectDB } from "@/lib/config/db"; // utility to connect to MongoDB
// import User from "@/lib/models/User";

// export default async function handler(req, res) {
//   await ConnectDB();

//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const users = await User.find({});
//         res.status(200).json({ success: true, data: users });
//       } catch (error) {
//         res.status(400).json({ success: false, error });
//       }
//       break;

//     case "PUT":
//       // Update user role
//       try {
//         const { id, role } = req.body;
//         const user = await User.findByIdAndUpdate(
//           id,
//           { role },
//           { new: true }
//         );
//         res.status(200).json({ success: true, data: user });
//       } catch (error) {
//         res.status(400).json({ success: false, error });
//       }
//       break;

//     case "DELETE":
//       try {
//         const { id } = req.body;
//         await User.findByIdAndDelete(id);
//         res.status(200).json({ success: true });
//       } catch (error) {
//         res.status(400).json({ success: false, error });
//       }
//       break;

//     default:
//       res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }


import { ConnectDB } from "@/lib/config/db";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();
    const users = await User.find({}, "-password"); // exclude passwords
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
