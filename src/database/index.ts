import mongoose from 'mongoose';
import dotenv from '../dotenv';

export default async () => {
  await mongoose.connect(dotenv.MONGO_URI)
    .then(() => {
      console.log('Database Connected Successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};