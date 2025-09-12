import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://developer:developer@oziomapov.rtksj4j.mongodb.net/blog-app');
    // await mongoose.connect('mongodb+srv://developer:developer@oziomapov.rtksj4j.mongodb.net/')
    // mongodb+srv://developer:<db_password>@oziomapov.rtksj4j.mongodb.net/?retryWrites=true&w=majority&appName=OziomaPov
    console.log("DB Connected");
}