import express from "express";
import { Users } from "../models/users.js";
import {
  createNewUser,
  deletebyId,
  findById,
  getAllUsers,
  specialFunc,
} from "../Controllers/user.js";
const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", createNewUser);

router.get("/userid/success", specialFunc);
// router.get("/userid/:id", findById);
// router.delete("/userid/:id", deletebyId);

// can also do this
router.route("/userid/:id").get(findById).delete(deletebyId);
export default router;
