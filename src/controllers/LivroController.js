import mongoose from "mongoose"
import { ObjectId } from "mongodb"
import Livros from "../models/livroSchema.js"
import { error } from "console"
import livroRouters from "../routes/livro.js"

//✅ Se for GET, use req.query (/autores?nome=Machado) ou req.params (/autores/Machado).

// melhor usar o params quando a busca for por id


export async function criarLivro(req, res) {
    const novoLivro = req.body // recebe as informações passadas na requisição
    const novoLivroCriado = await Livros.create(novoLivro) // espera a criação do novo livro para armazenar na constante

    console.log(novoLivroCriado) // mostra as infos que os livros foram criados
    res.status(200).json({ message: "Livro Cadastrado" })
}


export async function buscarLivro(req, res) {
    const { id } = req.params // recebe o id passado na requisição
    const livroEncontrado = await Livros.findById(id) // espera o livro ser encontrado 

    console.log(livroEncontrado)
    res.status(200).json({ message: livroEncontrado ? `Livro encontrado` : "Livro nao existe", content: livroEncontrado, statusCode: 200 })

}

export async function alterarLivroCompleto(req, res) {
    const { id } = req.body
    const livroAlterado = await Livros.findByIdAndUpdate(id)

    console.log(livroAlterado)
    res.status(200).json({ message: `Livro encontrado e alterado`, content: livroAlterado  })

}

export async function deletarLivro(req, res) {
    const {id} = req.body
    const livroEncontrado = await Livros.findByIdAndDelete(id)

    console.log(livroEncontrado)
    res.status(200).json({ message: `Livro encontrado e deletado`, livro: livroEncontrado })
}