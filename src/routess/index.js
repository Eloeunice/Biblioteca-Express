// Definindo rotas básicas
import express from "express"
import userRoutes from "./users.js"
import livroRouters from "./livro.js"

const router = express.Router() // definindo uma instancia de router pra conseguir manipular as rotas

router.use('/usuarios', userRoutes)
router.use('/livros', livroRouters)

export default router