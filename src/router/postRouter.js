import { Router } from "express";
import { create, getPosts } from "../controller/postsController.js";

export const postRouter = Router();

//pegar todos os posts
postRouter.get("/", getPosts);
//criar postagem
postRouter.post("/create", create);