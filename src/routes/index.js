const { Router } = require('express');
const routes = Router();

routes.get('/', (request, response) => {
  response.status(200).send({
    title: "Controle Financeiro",
    version: "0.0.1"
  });
});

module.exports = routes;