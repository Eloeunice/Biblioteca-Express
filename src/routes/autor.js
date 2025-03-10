// Definindo rotas básicas
import express from "express"
import {buscarAutor, criarAutor, alterarParteAutor, alterarAutorCompleto, deletarAutor} from "../controllers/AutorController.js"

const autorRouters = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

autorRouters.get('/',(req,res) => {res.send("Você está na rota de autor")})
autorRouters.get('/:id', buscarAutor)
autorRouters.post("/",criarAutor)
autorRouters.patch('/:id', alterarParteAutor)
autorRouters.put('/:id', alterarAutorCompleto)
autorRouters.delete('/:id',deletarAutor)


export default autorRouters