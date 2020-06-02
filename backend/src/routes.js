const express = require ('express');
//importando o express

const TweetController = require('./controllers/TweetController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router();
//Módulo de rotas do express

//Aqui vamos exportar nossas rotas
routes.get('/Tweets', TweetController.index);
routes.post('/Tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store);


module.exports = routes;