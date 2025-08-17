import mongoose from "mongoose";
const connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URl is not defined in the environment variables.");
        }
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log("MONGODB CONNECTED");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
};
export default connectDB;