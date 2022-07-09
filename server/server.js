const { text } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

app.post("/",verifyToken, (req, res)=> {
    jwt.verify(req.token, 'secretkey', (error,authData)=>{
        if(error){
            req.sendStatus(403);
        }else{
            res.json({
                mesaje: "Autenticado",
                authData
            })
        }
    });
    res.json({"status":"online"});
});

//Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const token = bearerHeader.split(" ")[1];
        req.token = token;
        next();
    }else{
        res.sendStatus(403);
    }
     
}

app.use(express.json());
app.use('/api', require('./routes/login.js'));

app.listen(port, ()=>{console.log("Se inicio el servidor en el puerto:", port)});