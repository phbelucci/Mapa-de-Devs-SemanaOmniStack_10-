//importa modulo express
const express = require('express')
//permite acesso ao banco mongodb
const mongoose = require('mongoose')

const routes = require('../src/routes')
//criando aplicaçao
const app = express()

// MongoDb (não - relacional)
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-lhxuq.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true})

//valido para todas as rotas da aplicaça
//informa para o express que sera utilizado o JSON 

//express.json precisa vir antes das rotas
app.use(express.json())
app.use(routes)

// principais rotas CRUD 
// Metodos http get, post, put, delete
// tipos parametros
// Query Params : request.query( filtros, ordenação, paginação...)
// Route Params : request.params (identificar recurso na alteraçaõ ou remoção)
// Body : request.body (dados para a criação ou alteração de um registro )

//define a porta que sera acessada
app.listen(3535)


/*
nodemon instalado nas dependencias dev
nodemon atualiza as alterações on-line

dentro package.json criar script personalizado para rodar o yarn somente com o comando 'dev'
"scripts" : {
    "dev" : "nodemon index.js"
  },

*/