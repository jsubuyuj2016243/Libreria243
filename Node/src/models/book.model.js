'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = Schema({
    autor: String,
    titulo: String,
    edicion: String,
    claves: String,
    descripcion: String,
    temas: String,
    copias: Number,
    disponibles: Number
})

module.exports = mongoose.model('Book', BookSchema);