// Definindo rotas básicas
import express from "express"

const userRoutes = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

userRoutes.get('/',(req,res) => 
    { res.send("Você está na rota de usuarios")}
   )


export default userRoutes