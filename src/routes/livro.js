import express from "express"
import  { criarLivro, alterarLivroCompleto, alterarParteLivro, buscarLivro, deletarLivro } from "../controllers/LivroController.js"

const livroRouters = express.Router()

livroRouters.get('/',(req,res) => {res.send("Você está na rota de livros agora")})
livroRouters.get('/:id', buscarLivro)
livroRouters.post('/', criarLivro)
livroRouters.patch('/:id', alterarParteLivro)
livroRouters.put('/:id', alterarLivroCompleto)
livroRouters.delete('/:id',deletarLivro)



export default livroRouters