const express = require("express");
let app = express();
const port = 4000;

app.get("/login", (req,res)=>{
    res.sendFile(__dirname + "/FrontEnd/login/index.html");
});

app.listen(port, ()=>{
    console.log("Escuchando en el puerto 4000 a conexiones entrantes");
});