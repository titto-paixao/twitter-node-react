const mongoose = require('mongoose');
//Importando o mongoose

//Criando esquema do MongoDb
const TweetSchema = new mongoose.Schema({
    //nome:tipo
    author: String,
    content: String,
    likes:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

//O que enviaremos caso algum arqui importe o 'Tweet.js'
module.exports = mongoose.model('Tweet', TweetSchema);