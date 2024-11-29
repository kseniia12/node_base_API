import { userRouter, authRouter } from "./authRoutse";
import { Router } from "express";
const allRouter = Router();

allRouter.use("/auth", authRouter);
allRouter.use("/users", userRouter);

export default allRouter;
