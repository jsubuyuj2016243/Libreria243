'use strict'

const express = require("express");
var authenticated = require("../middlewares/authenticated");
const bookController = require("../controllers/book.controller");


var api = express.Router();

api.post('/crearLibro', bookController.crearLibro)
api.get('/mostrarLibro', authenticated.ensureAuth, bookController.mostrarLibro)
api.put('/editarLibro/:idBook', authenticated.ensureAuth, bookController.editarLibro)
api.delete('/eliminarLibro/:idBook', authenticated.ensureAuth, bookController.eliminarLibro)
api.get('/buscarLibroID/:idBook', bookController.buscarLibroID)

module.exports = api;