import { Router } from "express";
import {createUser} from "../controllers/userController";
const authRouter  = Router();

authRouter.post('/sign-up', createUser)


export default authRouter;