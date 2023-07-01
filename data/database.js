import mongoose from "mongoose";
export const databaseFunc = () => {
  mongoose
    .connect(process.env.Mongo_Uri, {
      dbName: "backendAPi",
    })
    .then(() => {
      console.log("Database is up ");
    })
    .catch((e) => console.log(e));
};
