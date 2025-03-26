import mongoose, { Schema } from "mongoose" // desestruturação para importar partes especificas de um módulo


const UserSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true})

const Users = mongoose.model('Users', UserSchema)
export default Users