import { Router } from "express";
import {createUser, getAllUsers, getUserById, editUserById, deleteUserById, loginUser} from "../controllers/userController";
import { userSchema, validate } from "../yup/yup";
const authRouter  = Router();

authRouter.post('/sign-up', validate(userSchema), createUser)
authRouter.post('/sign-in', validate(userSchema), loginUser)
authRouter.get('', getAllUsers)
authRouter.get('/:id', getUserById)
authRouter.patch('/:id', editUserById)
authRouter.delete('/:id', deleteUserById)
export default authRouter;