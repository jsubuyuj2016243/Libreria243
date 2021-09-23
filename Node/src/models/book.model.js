'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = Schema({
    tipo: String,
    autor: String,
    titulo: String,
    edicion: String,
    claves: String,
    descripcion: String,
    temas: String,
    copias: Number,
    disponibles: Number,

    frecuencia: String,
    ejemplares: String
})

module.exports = mongoose.model('Book', BookSchema);