const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`📡 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    console.warn(`⚠️ Please update MONGODB_URI in your backend/.env file with a valid MongoDB Atlas connection string.`);
  }
};

module.exports = connectDB;
