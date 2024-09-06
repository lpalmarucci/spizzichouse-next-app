import mongoose from "mongoose";

let isConnected = false; //variable to check the connection status

export const connectToDb = async () => {
  mongoose.set("strict", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");

  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to DB!");
  } catch (error) {
    console.log("Error while connecting to DB ", error);
  }
};
