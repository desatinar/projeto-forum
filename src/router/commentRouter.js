import { Router } from "express";
import { create, deleteComment, edit, getCommentsByPostId } from "../controller/commentController.js";

export const commentRouter = Router();

//criar comentário na postagem
commentRouter.post("/create", create);
//editar comentário na postagem
commentRouter.put("/edit/:id", edit);
//deletar comentário da postagem
commentRouter.delete("/delete/:id", deleteComment);
// Obter comentários por ID da postagem
commentRouter.get("/post/:postId", getCommentsByPostId);