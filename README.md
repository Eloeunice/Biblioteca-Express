# Biblioteca-Express

Este é um projeto de uma API para gerenciamento de uma biblioteca, desenvolvido utilizando Node.js com o framework Express. O objetivo é praticar o desenvolvimento de APIs RESTful, implementando CRUD para livros e autores.

## 📌 Funcionalidades
- Cadastro, listagem, atualização e remoção de livros
- Cadastro, listagem, atualização e remoção de autores
- Relacionamento entre livros e autores
- Validações básicas de dados
- Autenticação com JWT
- Documentação com Swagger
- Tratamento avançado de erros

## 🛠 Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MongoDB (com Mongoose)**
- **Postman (para testes de API)**
- **Nodemon**
- **JWT para autenticação**
- **Swagger para documentação**

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o Repositório
```sh
git clone https://github.com/Eloeunice/Biblioteca-Express.git
cd Biblioteca-Express
```

### 2️⃣ Instalar Dependências
```sh
npm install
```

### 3️⃣ Configurar o Banco de Dados
Certifique-se de ter um cluster MongoDB disponível. Crie um arquivo `.env` na raiz do projeto e adicione:
```sh
MONGO_URI=seu_url_mongodb
PORT=3000
JWT_SECRET=sua_chave_secreta
```

### 4️⃣ Iniciar o Servidor
```sh
npm start
```
Ou para desenvolvimento com recarga automática:
```sh
npm run dev
```

## 🔍 Endpoints da API

### 📚 Livros
- **GET** `/livros` → Lista todos os livros
- **GET** `/livros/:id` → Obtém um livro por ID
- **POST** `/livros` → Adiciona um novo livro
- **PUT** `/livros/:id` → Atualiza um livro por ID
- **DELETE** `/livros/:id` → Remove um livro por ID

### 🖊️ Autores
- **GET** `/autores` → Lista todos os autores
- **GET** `/autores/:id` → Obtém um autor por ID
- **POST** `/autores` → Adiciona um novo autor
- **PUT** `/autores/:id` → Atualiza um autor por ID
- **DELETE** `/autores/:id` → Remove um autor por ID

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir!

---
💡 *Desenvolvido por [Eloeunice](https://github.com/Eloeunice).*
