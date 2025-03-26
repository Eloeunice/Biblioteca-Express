// Definindo rotas básicas
import express from "express"
import {criarUser, loginUser, alterarUserCompleto, deletarUser} from '../controllers/UserController.js'
import passport from "passport"

const userRoutes = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

userRoutes.get('/',(req,res) =>{ res.send("Você está na rota de usuarios")})
userRoutes.post('/cadastrar', criarUser)
userRoutes.post('/login', loginUser)
userRoutes.put('/:id',passport.authenticate("jwt", { session: false }),alterarUserCompleto)
userRoutes.delete('/:id', passport.authenticate("jwt", { session: false }), deletarUser)



export default userRoutes