// Middleware para fazer a autenticação dos tokens de usuário
import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import dotenv from "dotenv"
import Users from "../models/userSchema.js"
import { error } from "console"


dotenv.config() // acessar minhas variaveis no env

// Defino a estratégia de como o usuário vai ser autenticado

// controla como o token é extraído
const options = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
} // retira o token do cabeçalho da requisição

// funcao que processa o token e verifica a autenticação
const verify = async (jwt_payload, done) => {
    const user = await Users.findById(jwt_payload.id)
    // done is a passport error first callback accepting arguments done(error, user, info)
    if (user) {
        return done(null, user)
    }
    else {
        return done(null, false)
    }
}

const autenticateUser = new Strategy(options, verify)

export default autenticateUser

