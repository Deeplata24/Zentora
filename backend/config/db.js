import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);

        if (con) {
            console.log("Database connected successfully");
        }
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

export default dbconnect;
