// Definindo rotas básicas
import express from "express"
import {buscarAutor, criarAutor, alterarAutorCompleto, deletarAutor} from "../controllers/AutorController.js"
import { validateData } from "../middlewares/zod/validationMiddleware.js"
import { autorModeloSchema } from "../models/autorSchema.js"

const autorRouters = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

autorRouters.get('/',(req,res) => {res.send("Você está na rota de autor")})
autorRouters.get('/:id', buscarAutor)
autorRouters.post("/",validateData(autorModeloSchema),criarAutor)
autorRouters.put('/:id', alterarAutorCompleto)
autorRouters.delete('/:id',deletarAutor)


export default autorRouters