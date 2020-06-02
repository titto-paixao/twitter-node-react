const Tweet = require('../models/Tweet');
//Impotando twwet onde tem o modelo do db

module.exports = {
    //o 'async' é para ao sistema funcionar de maneira Assincrona
    //Método que vai listyar
    async index(req, res){
        //Pegando os tweets para listagem
        //em 'find({})' podemos fazer filtros para a listagem. Para isso só segui o manual do mongodb
        //e 'sort()' é a ordem de exibição
        const tweets = await Tweet.find({}).sort('-createdAt');
        return res.json(tweets);
    },
    //método que vai criar
    async store(req, res){
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
}
