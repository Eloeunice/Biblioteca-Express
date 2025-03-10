import mongoose, { Schema } from "mongoose" 
import { ObjectId } from "mongodb"// desestruturação para importar partes especificas de um módulo
import { z } from "zod"


const LivroSchema = new mongoose.Schema({
    titulo: {type: String, required: true, unique: true},
    autor:{type: mongoose.Schema.Types.ObjectId, ref: "Autores", required: true},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: "Categorias"},
    numeroPaginas: {type: Number},
})

const Livros = mongoose.model("Livros", LivroSchema)
export default Livros


export const livroModeloSchema = z.object({
    titulo: z.string(),
    autor:  z.instanceof(ObjectId),
    categoria: z.instanceof(ObjectId),
    numeroPaginas: z.number()
})