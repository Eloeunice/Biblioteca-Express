import express from "express"

const livroRouters = express.Router()

livroRouters.get('/',(req,res) => {res.send("Você está na rota de livros agora")})

export default livroRouters