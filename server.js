import express from "express"
import ConectarBanco from "./dbconnect.js"

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Requisição da Biblioteca!')
})

app.listen(PORT, () => {
  console.log(`App de exemplo esta rodando na porta ${PORT}`)
})

const conexao = await ConectarBanco()
conexao.on('open', () => console.log('Conexão aberta'))
conexao.on('error', (error) => console.log(`Erro na conexão, ${error}`))


export default app