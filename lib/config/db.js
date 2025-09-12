import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://developer:developer@oziomapov.rtksj4j.mongodb.net/blog-app');
    console.log("DB Connected");
}