import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(colors.green(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    console.error(colors.red(`Error: ${error.message}`));
    process.exit(1);
  };
};

export default connectDB;