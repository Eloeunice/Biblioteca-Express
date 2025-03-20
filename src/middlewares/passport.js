// Middleware para fazer a autenticação dos tokens de usuário

import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import dotenv from "dotenv"
import Users from "../models/userSchema"

dotenv.config() // acessar minhas variaveis no env

// Defino a estratégia de como o usuário vai ser autenticado

// controla como o token é extraído
const options = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

// funcao que processa o token e verifica a autenticação
const verify = async (jwt_payload, done) => {
    const user = await Users.findOne(jwt_payload.id)
    // done is a passport error first callback accepting arguments done(error, user, info)

    if (err) {
        return done(err, false)
    }
    if (user) {
        return done(null, user)
    }
    else {
        return done(null, false)
    }
}

const Strategy = new Strategy(options, verify)

export default Strategy

