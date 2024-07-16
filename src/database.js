require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then( () => console.log("Conexion exitosa a la BD"))
    .catch( (error) => console.log(error))