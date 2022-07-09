const { application } = require('express');
const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req, res)=> {
    res.json({"status":"online"});
});

app.use('', require('./routes/login.js'));
app.listen(port, ()=>{console.log("Se inicio el servidor en el puerto:", port)});