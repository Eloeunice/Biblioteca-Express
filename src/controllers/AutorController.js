import mongoose from "mongoose"
import Autores from "../models/autorSchema.js"
import { error } from "console"


async function criarAutor(req,res) {
    try{
        const novoAutor = req.body // recebe as informações passadas na requisição
        await Autores.create(novoAutor)
        res.status(200).json({message: "Autor Cadastrado"})

    } catch(error){
        res.status(500).json({message: `${error.message}`})

    }

}
export default criarAutor