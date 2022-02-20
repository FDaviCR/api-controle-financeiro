const { Router } = require('express');
const routes = Router();

// Rota raíz para testes
routes.get('/', (request, response) => {
  response.status(200).send({
    title: "Controle Financeiro",
    version: "0.0.1"
  });
});

module.exports = routes;