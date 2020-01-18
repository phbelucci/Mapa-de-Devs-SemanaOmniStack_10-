const {Router} = require('express')
const PointSchema = require('./models/utils/PointSchema')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router()


//response.send envia apenas texto como responta, existem outros tipos de response que podem ser selecionados
//define rota raiz

routes.get('/devs', DevController.index) 
routes.post('/devs', DevController.store) 

routes.get('/search', SearchController.index) 


module.exports = routes;