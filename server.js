import express from "express"
import ConectarBanco from "./src/config/dbconnect.js"
import router from "./src/routes/index.js"

const app = express()
const PORT = 3000
app.use('/', router)

app.get('/', (req, res) => {
  res.send('Requisição da Biblioteca!')
})

app.listen(PORT, () => {
  console.log(`Biblioteca esta rodando na porta ${PORT}`)
})

const conexao = await ConectarBanco()
conexao.on('open', () => console.log('Conexão aberta'))
conexao.on('error', (error) => console.log(`Erro na conexão, ${error}`))


export default app