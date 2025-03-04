import express from "express"

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Requisição da Biblioteca!')
})

app.listen(PORT, () => {
  console.log(`App de exemplo esta rodando na porta ${PORT}`)
})


export default app