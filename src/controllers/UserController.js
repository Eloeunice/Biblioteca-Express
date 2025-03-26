import mongoose from "mongoose"
import Users from "../models/userSchema.js"
import { error } from "console"
import { sign } from "crypto"
import jsonwebtoken from "jsonwebtoken" 
import passport from "passport"



export async function criarUser(req, res) {
    try {
        const { nome, email, password } = req.body // recebe as informações passadas na requisição
        const userJaExiste = await Users.findOne({ email })
        if (userJaExiste) {
            return res.status(400).json({ message: "Usuário já cadastrado!" })
        }
        const novoUser = { nome, email, password }
        await Users.create(novoUser)
        res.status(201).json({ message: "User Cadastrado", novoUser})

    } catch (error) {
        res.status(500).json({ message: `${error.message}` })

    }

}

export async function loginUser(req, res) {
    const { email, password } = req.body // recebe as informações passadas na requisição
    const userExiste = await Users.findOne({ email })
    if (!userExiste) {
        return res.status(400).json({ message: "Usuário nao existe!" })
    }
    const senhaIgual = password === userExiste.password
    if (!senhaIgual) {
        return res.status(400).json({ message: "Senha incorreta" })
    }
    else {
        const token = jsonwebtoken.sign({ id: userExiste.id, email: userExiste.email }, process.env.SECRET_KEY);
        res.json({ message: "Login bem-sucedido!", token })
    }
}

export async function buscarUser(req, res) {
    const { nome } = req.query
    const userEncontrado = await Users.find(nome)

    console.log(userEncontrado)
    res.status(200).json({ message: "User Encontrado", content: userEncontrado })
}

export async function alterarUserCompleto(req, res) {
    const { nome, email, password } = req.body
    const userEncontradoeModificado = await Users.findOneAndUpdate({nome, email, password})

    console.log(userEncontradoeModificado)
    res.status(200).json({ message: "User Encontrado e Modificado", content: userEncontradoeModificado })
}


export async function deletarUser(req, res) {
    const { nome } = req.query
    const userEncontrado = await Users.findOneAndDelete(nome)

    console.log(userEncontrado)
    res.status(200).json({ message: "User DELETADO", content: userEncontrado })
}

