import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    category:{
        type:String, 
        required:true
    },
    author:{
        type:String, 
        required:true
    },
    authorImg: { 
        type: String 
    },
    image:{
        type:String, 
        required:true
    },
    supabasePath: { 
        type: String 
    }, // optional for deletion
    date:{
        type:Date, 
        default:Date.now()
    }
})

// Original
// const BlogModel = mongoose.models.Blog || mongoose.model("blog", Schema);

// ✅ Fix casing: use the same name for both model and check = Chatgpt
const BlogModel = mongoose.models.blog || mongoose.model("blog", BlogSchema);


export default BlogModel