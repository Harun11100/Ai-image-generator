
import mongoose from "mongoose";


const connectDB = (url) => {
      mongoose.set('strictQuery', true);
  
      mongoose.connect(url, { useUnifiedTopology: true })
          .then(() => console.log('MongoDB connected'))
          .catch((err) => {
              console.error("Error connecting to MongoDB:", err);
          });
  };
  
  export default connectDB;