const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.redirect("http://localhost:8080/login");
});

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/views/login/login.html");
});

app.listen(8080, () => console.log("Servidor iniciado en el puerto 8080"));