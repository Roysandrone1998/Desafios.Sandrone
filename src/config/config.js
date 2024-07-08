const dotenv = require("dotenv");
const program = require("../utils/commander.js");
require('dotenv').config();
const { mode } = program.opts(); 

dotenv.config({
    path: mode === "produccion" ? "./.env.produccion" : "./.env.desarrollo"
});

const configObject = {
    mongo_url: process.env.MONGO_URL,
    port: process.env.PORT || 8080
};

module.exports = configObject;