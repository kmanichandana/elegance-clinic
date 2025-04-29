import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
console.log('MongoDB URI:', MONGODB_URI);

async function dbConnect() {
  console.log("MONGODB_URI:", MONGODB_URI); // Debugging line
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully!");
} catch (error) {
    console.error("Error connecting to MongoDB:", error); 
}
}


export default dbConnect;
