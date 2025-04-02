import mongoose, { Schema } from 'mongoose'
import { z } from 'zod'
import { ObjectId } from 'mongodb' // desestruturação para importar partes especificas de um módulo

const AutorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  anoNascimento: { type: Date },
  nacionalidade: { type: String },
})

const Autores = mongoose.model('Autores', AutorSchema)
export default Autores

export const autorModeloSchema = z.object({
  nome: z.string(),
  anoNascimento: z.date(),
  nacionalidade: z.string(),
})
