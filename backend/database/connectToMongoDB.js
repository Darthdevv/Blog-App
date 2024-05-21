import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MongoDB sucessfully ✅");
  } catch (error) {
    console.log(`Failed to connect to Mongo: ${error.message}`);
  }
};

export default connectToMongoDB;
