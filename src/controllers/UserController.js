import Users from '../models/userSchema.js'
import jsonwebtoken from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'

export async function criarUser(req, res) {
  try {
    const { nome, email, password } = req.body // recebe as informações passadas na requisição
    const userJaExiste = await Users.findOne({ email })
    if (userJaExiste) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Usuário já cadastrado!' })
    }
    const novoUser = { nome, email, password }
    await Users.create(novoUser)
    res.status(StatusCodes.CREATED).json({ message: 'User Cadastrado', novoUser })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `${error.message}` })
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body // recebe as informações passadas na requisição
  const userExiste = await Users.findOne({ email })
  if (!userExiste) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Usuário nao existe!' })
  }
  const senhaIgual = password === userExiste.password
  if (!senhaIgual) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Senha incorreta' })
  } else {
    const token = jsonwebtoken.sign(
      { id: userExiste.id, email: userExiste.email },
      process.env.SECRET_KEY,
    )
    res.json({ message: 'Login bem-sucedido!', token })
  }
}

export async function buscarUser(req, res) {
  const { nome } = req.query
  const userEncontrado = await Users.find(nome)

  console.log(userEncontrado)
  res.status(StatusCodes.OK).json({ message: 'User Encontrado', content: userEncontrado })
}

export async function alterarUserCompleto(req, res) {
  const { nome, email, password } = req.body
  const userEncontradoeModificado = await Users.findOneAndUpdate({
    nome,
    email,
    password,
  })

  console.log(userEncontradoeModificado)
  res.status(StatusCodes.OK).json({
    message: 'User Encontrado e Modificado',
    content: userEncontradoeModificado,
  })
}

export async function deletarUser(req, res) {
  const { nome } = req.query
  const userEncontrado = await Users.findOneAndDelete(nome)

  console.log(userEncontrado)
  res.status(StatusCodes.OK).json({ message: 'User DELETADO', content: userEncontrado })
}
