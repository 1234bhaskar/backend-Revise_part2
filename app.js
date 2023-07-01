import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/", {
    dbName: "backendAPi",
  })
  .then(() => {
    console.log("Database is up ");
  })
  .catch((e) => console.log(e));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Users = mongoose.model("User", schema);

app.get("/Users/all", async (req, res) => {
  const users = await Users.find({});
  res.json({
    success: true,
    users,
  });
});

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
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/userid/success", async (req, res) => {
  res.json({
    success: true,
    message: "joking",
  });
});
app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  console.log(req.params);
  res.json({
    success: true,
    user,
  });
});

app.listen(5000, () => {
  console.log("port 5000 Server Running");
});
