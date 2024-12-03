import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  editUserById,
  deleteUserById,
  loginUser,
} from "../controllers/userController";
import {
  userEditSchema,
  userLoginSchema,
  userRegistrationSchema,
  validate,
} from "../utils/validation";
import authenticateToken from "../middlewares/authMiddleware";

export const authRouter = Router();
export const userRouter = Router();

authRouter.post("/sign-up", validate(userRegistrationSchema), createUser);
authRouter.post("/sign-in", validate(userLoginSchema), loginUser);
userRouter.get("", authenticateToken, getAllUsers);
userRouter.get("/me", authenticateToken, getUserById);
userRouter.patch(
  "/me",
  authenticateToken,
  validate(userEditSchema),
  editUserById,
);
userRouter.delete("/me", authenticateToken, deleteUserById);
