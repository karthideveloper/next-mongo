import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://karthi11:karthi11@nextcrud.eurtma2.mongodb.net/?retryWrites=true&w=majority";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database connected");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;