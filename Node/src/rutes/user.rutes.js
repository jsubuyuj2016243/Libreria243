'use strict'

const express = require("express");
var authenticated = require("../middlewares/authenticated");
const userController = require("../controllers/user.controller");


var api = express.Router();

api.post('/Login', userController.Login)
api.post('/crearUsuario', userController.crearUsuario)
api.get('/mostrarUsuarios', authenticated.ensureAuth, userController.mostrarUsuarios)
api.put('/editarUsuario/:idUser', authenticated.ensureAuth, userController.editarUsuario)
api.delete('/eliminarUsuario/:idUser', authenticated.ensureAuth, userController.eliminarUsuario)
api.get('/buscarUsuarioID/:idUser', userController.buscarUsuarioID)


module.exports = api;