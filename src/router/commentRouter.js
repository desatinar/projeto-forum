import { Router } from "express";
import { create, edit } from "../controller/commentController.js";

export const commentRouter = Router();

//criar comentário na postagem
commentRouter.post("/create", create);
//editar comentário na postagem
commentRouter.put("/edit/:id", edit);