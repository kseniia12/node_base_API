import { Router } from "express";
import {createUser, getAllUsers, getUserById, editUserById, deleteUserById, loginUser} from "../controllers/userController";
const authRouter  = Router();

authRouter.post('/sign-up', createUser)
authRouter.post('/sign-in', loginUser)
authRouter.get('', getAllUsers)
authRouter.get('/:id', getUserById)
authRouter.patch('/:id', editUserById)
authRouter.delete('/:id', deleteUserById)
export default authRouter;