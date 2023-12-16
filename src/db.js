import mongoose from "mongoose";

const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "oyo",
  });
  console.log("Connect Database");
};


export default ConnectDB;