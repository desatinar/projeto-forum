import { Router } from "express";
import { login, signup } from "../controller/userController.js";

export const userRouter = Router();

//criar usuário
userRouter.post("/signup", signup);
//login
userRouter.post("/login", login);