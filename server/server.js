const { application } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get("/login", (req,res)=>{
    res.json({"status":"ok","data":[1,2,3]});
});
app.post("/login", (req,res)=>{
    console.log(req.header);
    res.json({"status": "ok"});
});

app.listen(port, ()=>{console.log("Se inicio el servidor en el puerto:", port)});