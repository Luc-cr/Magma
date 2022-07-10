const { text, json } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');
const { TOKEN, PORT } = require('./config');

const app = express();

app.get("/" /*Ruta*/, (req, res) /*Funcion de la ruta*/=> {
    res.header({"status": 200});
    res.json({data:"pong!!"});
});

app.use(express.json()); /*Utiliza json para interpretar los archivos*/ 
app.use('/api', require('./routes/login.js')); /* Define una ruta*/
app.use('/api',  require('./routes/auth.js'));
app.listen(PORT, ()=>{console.log("Se inicio el servidor en el puerto:", PORT)}); /*Se pone a la escucha de conexiones entrantes*/ 