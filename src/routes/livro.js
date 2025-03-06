import express from "express"
import criarLivro from "../controllers/LivroController.js"

const livroRouters = express.Router()

livroRouters.get('/',(req,res) => {res.send("Você está na rota de livros agora")})
livroRouters.post('/', criarLivro)


export default livroRouters