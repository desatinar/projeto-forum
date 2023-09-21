import { Router } from "express";
import { create } from "../controller/commentController.js";

export const commentRouter = Router();

//criar comentário na postagem
commentRouter.post("/create", create);