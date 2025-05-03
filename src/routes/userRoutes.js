import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';
import Joi from 'joi';
import validateUser from '../middlewares/inputValidator.js';
const router = express.Router();


router.get("/user",validateUser,getAllUsers);
router.get("/user/:id",getUserById);
router.post("/user",validateUser, createUser);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);
//get all users
export default router;


