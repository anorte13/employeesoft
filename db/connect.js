import mongoose from "mongoose";
//const URI =
//"mongodb+srv://angelortega27:mj32D6Xx8HWc9GFO@cluster0.jd5rrjm.mongodb.net/vectacorp?retryWrites=true&w=majority";
//mongoose
//.connect(URI)
//.then(() => console.log("Connected to the database..."))
//.catch((err) => console.log("Could not connect to the database!"));

const connectDB = (url) => {
  return mongoose.connect(process.env.DB);
};
export default connectDB;
