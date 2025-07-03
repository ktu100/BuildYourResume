import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ktu10:182764@cluster0.7ii6ulk.mongodb.net/ResumweBuilder')
        .then(() => console.log('DB CONNECTED'));
}

//ktu10
//182764