import authRouter from "./authRoutse";
import { Router } from "express";
const allRouter  = Router();

allRouter.use('/auth', authRouter)
allRouter.use('/users', authRouter)
export default allRouter;