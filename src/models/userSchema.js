import mongoose, { Schema } from "mongoose" // desestruturação para importar partes especificas de um módulo


const UserSchema = new mongoose.Schema({
    nome: {String, required: true},
    email:{String, required: true, unique: true},
    senha: {String, required: true},
}, {timestamps: true})


export default mongoose.model('Users', UserSchema)