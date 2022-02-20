const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/index');
const connection = require("./database/index");


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes);


app.listen(3000, () => {
    console.log("O servidor está rodando!")
});