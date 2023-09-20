import { Router } from "express";
import { login, signup } from "../controller/userController.js";

export const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login)