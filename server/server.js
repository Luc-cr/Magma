const { application } = require('express');
const express = require('express');
const app = express();

app.get("/login", (req,res)=>{
    res.json({"users":['1','2','3']});
});

app.listen(5000, ()=>{console.log("Se inicio el servidor en el puerto 5000")});