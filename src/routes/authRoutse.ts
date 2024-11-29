import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  editUserById,
  deleteUserById,
  loginUser,
} from "../controllers/userController";
import { userSchema, validate } from "../utils/validation";
import { authenticateToken } from "../middlewares/authMiddleware";

export const authRouter = Router();
export const userRouter = Router();

authRouter.post("/sign-up", validate(userSchema), createUser);
authRouter.post("/sign-in", validate(userSchema), loginUser);
userRouter.get("", authenticateToken, getAllUsers);
userRouter.get("/me", authenticateToken, getUserById);
userRouter.patch("/me", authenticateToken, validate(userSchema), editUserById);
userRouter.delete("/me", authenticateToken, deleteUserById);
