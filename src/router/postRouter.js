import { Router } from "express";
import { create, deletePost, edit, getPostById, getPosts } from "../controller/postsController.js";

export const postRouter = Router();

//pegar todos os posts
postRouter.get("/", getPosts);
//pegar postagem pelo id
postRouter.get("/:id", getPostById);
//criar postagem
postRouter.post("/create", create);
//editar postagem
postRouter.put("/edit/:id", edit);
//deletar postagem
postRouter.delete("/delete/:id", deletePost);