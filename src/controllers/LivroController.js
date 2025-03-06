import mongoose from "mongoose"
import Livros from "../models/livroSchema.js"
import { error } from "console"


async function criarLivro(req,res) {
    try{
        const novoLivro = req.body // recebe as informações passadas na requisição
        await Livros.create(novoLivro)
        res.status(200).json({message: "Livro Cadastrado"})

    } catch(error){
        res.status(500).json({message: `${error.message}`})

    }

}
export default criarLivro