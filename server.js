import 'express-async-errors'
import express from "express"
import ConectarBanco from "./src/config/dbconnect.js"
import router from "./src/routes/index.js"
import { MongooseError } from 'mongoose'
import { ZodError } from 'zod'
import passport from 'passport'
import autenticateUser from './src/middlewares/passport.js'
import jsonwebtoken from 'jsonwebtoken'


const app = express()
app.use(express.json())

const PORT = 3000
passport.use(autenticateUser)
app.use(passport.initialize()) // inicializa o passoort

app.use('/', router)

app.get('/', (req, res) => {
  res.send('Requisição da Biblioteca!')
})

app.use((err, req, res, next) => {
  if (err instanceof ZodError) {
    const errorMessages = err.errors.map((issue) => ({
      message: `${issue.path.join('.')} is ${issue.message}`,
    }))
    res.status(400).json({ error: 'Invalid data', details: errorMessages })
    return;

  }

  if (err instanceof MongooseError) {
    console.log(err)
    res.json({ message: 'Ocorreu um erro no banco' })
    return;

  }

  console.log(err)
  res.json({ message: 'Ocorreu um erro, por favor tente novamente' })
})

app.listen(PORT, () => {
  console.log(`Biblioteca esta rodando na porta ${PORT}`)
})

const conexao = await ConectarBanco()
conexao.on('open', () => console.log('Conexão aberta'))
conexao.on('error', (error) => console.log(`Erro na conexão, ${error}`))


export default app