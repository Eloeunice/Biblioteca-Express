import mongoose, { Schema } from "mongoose" // desestruturação para importar partes especificas de um módulo


const AutorSchema = new mongoose.Schema({
    nome: {String, required: true},
    anoNascimento:{Date},
    nacionalidade: {String},
})


export default mongoose.model('Autores', AutorSchema)