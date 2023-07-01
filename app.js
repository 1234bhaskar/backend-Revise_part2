import express from "express";
//import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import { config } from "dotenv";
export const app = express();

config({
  path: "./data/config.env",
});

//const router = express.Router();

// app.get("/Users/all", async (req, res) => {
//   const users = await Users.find({});
//   res.json({
//     success: true,
//     users,
//   });
// });

//for static data
// app.post("/users/new", async (req, res) => {
//   await Users.create({
//     name: "Bhaskar",
//     email: "Bhaskar@1234",
//     password: "1234567",
//   });

//   res.json({
//     success: true,
//     message: "Registered Successfully",
//   });
// });

//for dynamic data
// app.post("/users/new", async (req, res) => {
//   const { name, email, password } = req.body;
//   await Users.create({
//     name,
//     email,
//     password,
//   });
//   res.status(201).json({
//     success: true,
//     message: "Registered Successfully",
//   });
// });

//Using MiddleWare
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
