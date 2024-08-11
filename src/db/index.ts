import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URI as string;
  mongoose
    .connect(connectionUrl)
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => console.log(e));
};

export default connectToDB;
