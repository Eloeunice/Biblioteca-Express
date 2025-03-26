import mongoose from "mongoose"
import { ObjectId } from "mongodb"
import Livros from "../models/livroSchema.js"
import { error } from "console"
import livroRouters from "../routes/livro.js"

//✅ Se for GET, use req.query (/autores?nome=Machado) ou req.params (/autores/Machado).

// melhor usar o params quando a busca for por id

export async function encontrarLivros(req,res){
    const page = req.query.page || 0 // pego a pagina definida na url
    const limit = req.query.limit // pego o limite de objetos definido dentro da url

     // Preciso que cada pagina tenha a quantidade de limite 
    const paginaAtual = page == 1 ? 0 : (page * limit) 
    // buscar os livros de acordo com o limite informado
    const livrosEncontrados = await Livros.find().skip(paginaAtual).limit(limit) // o problema é que ele só vai trazer livros dos limites
   
    console.log(livrosEncontrados)
    
    res.status(200).json({livrosEncontrados})

}
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