import mongoose, { Schema } from "mongoose" // desestruturação para importar partes especificas de um módulo


const LivroSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    autor:{type: mongoose.Schema.Types.ObjectId, ref: "Autores", required: true},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: "Categorias"},
    numeroPaginas: {type: Number},
})

const Livros = mongoose.model("Livros", LivroSchema)
export default Livros