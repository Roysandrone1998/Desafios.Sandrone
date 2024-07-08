const mongoose = require("mongoose");
const { mongo_url } = require("./config/config");

class BaseDatos {
    static #instancia; 
    constructor() {
        mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Conexión exitosa a la base de datos"))
        .catch(err => console.error("Error de conexión a la base de datos:", err));
    }

    static getInstancia() {
        if (this.#instancia) {
            console.log("Conexión previa");
            return this.#instancia;
        }

        this.#instancia = new BaseDatos();
        console.log("Conexión exitosa!!");
        return this.#instancia;
    }
}

module.exports = BaseDatos.getInstancia();