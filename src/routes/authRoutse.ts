import { Router } from "express";
import {createUser, getAllUsers, getUserById, editUserById, deleteUserById, loginUser} from "../controllers/userController";
import { userSchema, validate } from "../utils/validation";
import { authenticateToken } from "../middlewares/authMiddleware";
const authRouter  = Router();

authRouter.post('/sign-up', validate(userSchema), createUser)
authRouter.post('/sign-in',loginUser)
authRouter.get('', authenticateToken, getAllUsers)
authRouter.get('/me', authenticateToken, getUserById)
authRouter.patch('/:id', editUserById)
authRouter.delete('/:id', deleteUserById)
export default authRouter;