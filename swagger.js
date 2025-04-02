import swaggerAutogen from 'swagger-autogen'
const doc = {
  info: {
    title: 'API Bilblioteca',
    description: 'Documentação gerada automaticamente com Swagger',
    version: '1.0.0',
  },
  host: 'localhost:3000', // URL onde a API está rodando
  schemes: ['http'], // Tipo de conexão (http ou https)
}

// Arquivo onde será salva a documentação gerada
const outputFile = './swagger-output.json'

// Arquivo principal do servidor (onde as rotas estão sendo usadas)
const endpointsFiles = ['./server.js']

// Geramos a documentação
swaggerAutogen(outputFile, endpointsFiles).then(() => {
  console.log(' Documentação gerada automaticamente!')
})
