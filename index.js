const express = require('express');
require('dotenv').config()
const {dbConnection} = require('./database/config');
const app = express();

//Base de datos
dbConnection()

//Directorio publico
app.use(express.static('public'))

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/wallet', require('./routes/wallet.js') )

//Escuchar peticiones
app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT} 😋`));