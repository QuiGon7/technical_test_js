import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || "";
console.log("DATABASE_URL", process.env.DATABASE_URL);

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
};
