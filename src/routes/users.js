// Definindo rotas básicas
import express from "express"
import {criarUser, alterarUserCompleto, deletarUser} from '../controllers/UserController.js'
import jsonwebtoken from "jsonwebtoken"

const userRoutes = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

userRoutes.get('/',(req,res) => { res.send("Você está na rota de usuarios")} )
userRoutes.post('/user/login', criarUser)
userRoutes.put('/:id', alterarUserCompleto)
userRoutes.delete('/:id',deletarUser)



export default userRoutes