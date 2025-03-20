import mongoose from "mongoose"
import Users from "../models/userSchema.js"
import { error } from "console"


export async function criarUser(req,res) {
    try{
        const novoUser = req.body // recebe as informações passadas na requisição
        await Users.create(novoUser)
        res.status(201).json({message: "User Cadastrado"})

    } catch(error){
        res.status(500).json({message: `${error.message}`})

    }

}

export async function buscarUser(req,res) {
    const { nome } = req.query
    const userEncontrado = await Users.find(nome)

    console.log(userEncontrado)
    res.status(200).json({message: "User Encontrado", content: userEncontrado})
}

export async function alterarUserCompleto(req,res) {
    const { nome } = req.body
    const userEncontrado = await Users.find(nome)

    console.log(userEncontrado)
    res.status(200).json({message: "User Encontrado", content: userEncontrado})
}


export async function deletarUser(req,res){

}