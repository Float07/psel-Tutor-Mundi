const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(function(req, res, next) {
  //Permite conexão de requisições locais
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

//Ponto de acesso - Recebe a avaliação e a imprime
app.post('/rate_stars', (req, res) => {
  console.log(`Avaliação de ${req.body.value} estrela${req.body.value>1 ? 's' : ''} recebida`);
  res.send("Avaliação recebida!");
})

app.listen(port, () => console.log(`Servidor esperando conexão na porta ${port}`));
