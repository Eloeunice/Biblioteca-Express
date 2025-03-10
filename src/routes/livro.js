import express from "express"
import  { criarLivro, alterarLivroCompleto,buscarLivro, deletarLivro } from "../controllers/LivroController.js"
import { validateData } from "../middlewares/zod/validationMiddleware.js"
import { livroModeloSchema } from "../models/livroSchema.js"

const livroRouters = express.Router()

livroRouters.get('/',(req,res) => {res.send("Você está na rota de livros agora")})
livroRouters.get('/:id', buscarLivro)
livroRouters.post('/',  validateData(livroModeloSchema), criarLivro)
livroRouters.put('/:id', alterarLivroCompleto)
livroRouters.delete('/:id',deletarLivro)

export default livroRouters