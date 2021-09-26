'use strict'

const express = require("express");
var authenticated = require("../middlewares/authenticated");
const bookController = require("../controllers/book.controller");


var api = express.Router();

api.post('/crearLibro/id', bookController.crearLibro)
api.get('/mostrarLibro', authenticated.ensureAuth, bookController.mostrarLibro)
api.put('/editarLibro/:idBook', authenticated.ensureAuth, bookController.editarLibro)
api.delete('/eliminarLibro/:idBook', authenticated.ensureAuth, bookController.eliminarLibro)


module.exports = api;