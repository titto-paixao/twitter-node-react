const express = require('express');
//Importando o express e colocando em uma variável
const mongoose = require('mongoose');
//Importando dependencia do mongoose

const cors = require('cors');

const app = express();
//Chamando função express

//para o funcionamento em real time
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Realizando conexão com o MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb+srv://twitter-backend:twitter123@twitter-backennd-usu9h.mongodb.net/test?retryWrites=true&w=majority', {
    useMongoClient: true
}).then(()=>{
    console.log("Conexão efetuada com sucesso")
}).catch((err)=>{
    console.log("Erro ao conectar ao banco"+ err)
});

//Tornando a 'io' uma variável global
app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());

//Fazendo com que minha aplicação possa receber dados via json
app.use(express.json());
//Importando arquivo de rotas
app.use(require('./routes'));

//Alocando aplicação em um endereço
server.listen(3000, () => {
    console.log("Seu servidor foi iniciado na porta 3000");
});