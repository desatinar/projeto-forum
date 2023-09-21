import express from "express";
import cors from "cors";
import { userRouter } from "./router/userRouter.js";
import { postRouter } from "./router/postRouter.js";
import { commentRouter } from "./router/commentRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

//rota de usuários
app.use("/user", userRouter);
//rota de postagens
app.use("/post", postRouter);
//rota de comentários
app.use("/comments", commentRouter);
