const mongoose = require('mongoose')

//nao é modelo pq nao vai para o banco como um model
const PointSchema = new mongoose.Schema({

    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates : {
        type: [Number],
        required: true 
    }
})

module.exports = PointSchema;