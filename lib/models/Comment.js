// import mongoose from "mongoose";

// const commentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   content: String,
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);


import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    blogId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
