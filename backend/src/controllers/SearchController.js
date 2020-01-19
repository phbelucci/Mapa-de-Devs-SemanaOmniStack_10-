const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    async index(request,response) {
        //busca todos os devs num raio de 10km
        //filtrar por techs
        const {latitude,longitude,techs} = request.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs : {
                $in: techsArray
            },
            location : {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude]
                     },
                    $maxDistance : 10000
                }
            }
        })

        return response.json({devs})
    },
    async destroy(request,response){

        const {name} = request.query
        console.log(name)

        const dev = await Dev.deleteOne({
            github_username  : {$equals : name}
        })

        return response.json({message : `O usuario ${name} foi excluido!`})
    }
}