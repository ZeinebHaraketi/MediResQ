import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gestion_urgences');
        console.log(`MongoDB connected: ${conn.connection.host}`);
      } catch (error) {
    console.error(`Error: ${(error as Error).message}`); // Cast 'error' to 'Error' type to fix the error type issue
    process.exit(1);
  }
};

export default connectDB;
