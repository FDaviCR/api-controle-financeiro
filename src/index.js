const express = require('express');
const app = express();
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const JWTSecret = "YouShallNotPass";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTSecret,(err, data) => {
            if(err){
                res.status(401);
                res.json({err:"Token inválido!"});
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, login: data.login};
                next();
            }
        });
    }else{
        res.status(401);
        res.json({err:"Token inválido!"});
    }
}

//const connection = require("./database/database");

app.listen(3000, () => {
    console.log("O servidor está rodando!")
});