// Definindo rotas básicas
import express from "express"
import criarAutor from "../controllers/AutorController.js"

const autorRouters = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

autorRouters.get('/',(req,res) => 
    { res.send("Você está na rota de autor")}
   )
autorRouters.post("/",criarAutor)

export default autorRouters