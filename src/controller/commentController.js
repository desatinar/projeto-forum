import { db } from "../database/database.js";

export const create = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const token = req.headers.authorization;

        if(!postId || !token || !comment){
            throw new Error("É necessário passar 'postId', 'token' e 'comment'");
        }

        const [postExist] = await db("posts").where({id: postId});

        if(!postExist){
            throw new Error("id da postagem inválido");
        }

        const [userExist] = await db("users").where({id: token});

        if(!userExist){
            throw new Error("id do usuário inválido");
        }

        await db("comments").insert({creator_id: token, post_id: postId, comment});

        res.status(201).send("Comentário criado com sucesso")
    } catch (error) {
        res.status(400).send(error.message);
    }
}