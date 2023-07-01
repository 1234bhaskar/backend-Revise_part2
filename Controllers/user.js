import { Users } from "../models/users.js";

export const getAllUsers = async (req, res) => {
  const users = await Users.find({});
  res.json({
    success: true,
    users,
  });
};

export const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  await Users.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    success: true,
    message: "Registered Successfully",
  });
};

export const specialFunc = async (req, res) => {
  res.json({
    success: true,
    message: "joking",
  });
};

export const findById = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  console.log(req.params);
  res.json({
    success: true,
    user,
  });
};
export const deletebyId = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  //await user.remove();
  res.json({
    success: true,
    message: "Deleted",
  });
};
