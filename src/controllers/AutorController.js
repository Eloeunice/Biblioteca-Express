import mongoose from 'mongoose'
import Autores from '../models/autorSchema.js'
import { StatusCodes } from 'http-status-codes'

export async function criarAutor(req, res) {
  try {
    const novoAutor = req.body // recebe as informações passadas na requisição
    await Autores.create(novoAutor)
    res.status(StatusCodes.OK).json({ message: 'Autor Cadastrado' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: `${error.message}` })
  }
}

export async function buscarAutor(req, res) {
  const { id } = req.params
  const autorEncontrado = await Autores.findById(id)

  console.log(autorEncontrado)
  res
    .status(StatusCodes.OK)
    .json({ message: 'Autor encontrado', content: autorEncontrado })
}

export async function buscarAutorporNome(req, res) {
  const { nome } = req.query
  const autorEncontrado = await Autores.find(nome)

  console.log(autorEncontrado)
  res
    .status(StatusCodes.OK)
    .json({ message: 'Autor encontrado', content: autorEncontrado })
}

export async function alterarAutorCompleto(req, res) {
  const { id, nome, anoNascimento, nacionalidade } = req.body
  const autorAlterado = await Autores.findByIdAndUpdate(
    id,
    { nome, anoNascimento, nacionalidade },
    { returnDocument: 'after' },
  )

  console.log(autorAlterado)
  res.status(StatusCodes.OK).json({ message: 'Autor alterado', content: autorAlterado })
}

export async function deletarAutor(req, res) {
  const { id } = req.body
  const autorDeletado = await Autores.findByIdAndDelete(id)

  res.status(StatusCodes.OK).json({ message: 'Autor Deletado' })
}
