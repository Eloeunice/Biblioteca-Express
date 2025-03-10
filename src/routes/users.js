// Definindo rotas básicas
import express from "express"
import {criarUser, alterarParteUser, alterarUserCompleto, deletarUser} from '../controllers/UserController.js'

const userRoutes = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

userRoutes.get('/',(req,res) => { res.send("Você está na rota de usuarios")} )
userRoutes.post('/', criarUser)
userRoutes.patch('/:id', alterarParteUser)
userRoutes.put('/:id', alterarUserCompleto)
userRoutes.delete('/:id',deletarUser)



export default userRoutes