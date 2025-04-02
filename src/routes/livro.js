import express from 'express'
import {
  criarLivro,
  alterarLivroCompleto,
  buscarLivro,
  deletarLivro,
  encontrarLivros,
} from '../controllers/LivroController.js'
import { validateData } from '../middlewares/zod/validationMiddleware.js'
import { livroModeloSchema } from '../models/livroSchema.js'
import passport from 'passport'

const livroRouters = express.Router()

livroRouters.get('/', encontrarLivros)
livroRouters.get('/:id', buscarLivro)
livroRouters.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validateData(livroModeloSchema),
  criarLivro,
)
livroRouters.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  alterarLivroCompleto,
)
livroRouters.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  deletarLivro,
)

export default livroRouters
