import mongoose from "mongoose";
import React from "react";

const connectMongoDb = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongooDb.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
