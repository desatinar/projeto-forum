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

        const posts = await db("posts");
        res.status(200).send(posts);
        
    } catch (error) {
        res.send(error.message);
    }
}

export const create = async (req, res) => {
    try {
        const { title, content } = req.body;
        const token = req.headers.authorization;
        if(!title || !content){
            res.statusCode = 400;
            throw new Error("Necessário passar 'content'");
        }

        if(typeof title !== "string"){
            res.statusCode = 400;
            throw new Error("'title' precisa ser do tipo 'string'");
        }

        if(typeof content !== "string"){
            res.statusCode = 400;
            throw new Error("'content' precisa ser do tipo 'string'")
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

        await db("posts").insert({id, creator: token, title, content});

        res.status(201).send("Postagem criada com sucesso");
    } catch (error) {
        res.send(error.message);
    }
}