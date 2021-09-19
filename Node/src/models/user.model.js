'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    carnet: Number,
    nombre: String,
    apellido: String,
    usuario: String,
    correo: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema);