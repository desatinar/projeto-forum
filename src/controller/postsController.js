import { db } from "../database/database.js"
import { v4 } from "uuid";

export const getPosts = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token){
            res.statusCode = 400;
            throw new Error("Necessário informar o token");
        }

        const [tokenExist] = await db("users").where({id: token});
        if (!tokenExist){
            res.statusCode = 400;
            throw new Error("Token inválido");
        }

        const posts = await db("posts as p")
            .select("u.username as creator_name", "p.creator as creator_id", "p.id as post_id", "p.title as post_title",
             "p.content as post_content", "p.created_at as post_created_at", "p.image as post_image")
            .innerJoin("users as u", "u.id", "=", "p.creator");

        res.status(200).send(posts);
    } catch (error) {
        res.send(error.message);
    }
}

export const create = async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const token = req.headers.authorization;
        if(!title || !content || !image){
            res.statusCode = 400;
            throw new Error("Necessário passar 'content', 'title' e 'image'");
        }

        if(typeof title !== "string"){
            res.statusCode = 400;
            throw new Error("'title' precisa ser do tipo 'string'");
        }

        if(typeof content !== "string"){
            res.statusCode = 400;
            throw new Error("'content' precisa ser do tipo 'string'")
        }

        if(typeof image !== "string"){
            res.statusCode = 400;
            throw new Error("'image' precisa ser do tipo 'string'")
        }

        if(!token){
            res.statusCode = 400;
            throw new Error("Informar o 'token'");
        }

        const [creatorExist] = await db("users").where({id: token});

        if(!creatorExist){
            res.statusCode = 400;
            throw new Error("ID do usuário não encontrado");
        }

        const id = v4();

        await db("posts").insert({id, creator: token, title, content, image});

        res.status(201).send("Postagem criada com sucesso");
    } catch (error) {
        res.send(error.message);
    }
}