'use strict'

const jwt = require('../services/jwt');
const bcrypt = require("bcrypt-nodejs");

const userModel = require("../models/user.model");
const bookModel = require("../models/book.model");

const administrador ='admin'
const usuario = 'estudiante';
const bibliotecario = 'bibliotecario';

function Login(req, res) {
    var params = req.body;
  
    userModel.findOne({ usuario: params.usuario }, (err, userFound) => {
      if (err) return res.status(404).send({ report: 'Error al iniciar sesión' });
      if (!userFound) return res.status(404).send({ report: 'usuario no encontrado' });
  
      if (userFound) {
        bcrypt.compare(params.password, userFound.password, (err, Valid) => {
          if (err) return res.status(404).send({ report: 'Contraseña incorrecta' });
          if (Valid) {
            return res.status(200).send({ token: jwt.createToken(userFound), userFound });
          } else {
            return res.status(404).send({ report: 'Usuario no válido' })
          }
        })
      }
    })
  
  }

function crearUsuario(req, res) {
  var tipo = req.params.tipo;
  var params = req.body;
  var userModel = new userModel();
  var type = req.user.tipo;
  
  if(type != administrador) return res.status(404).send({report:'No tienes los permisos necesarios'})
  
    userModel.carnet = params.carnet;
    userModel.nombre = params.nombre;
    userModel.apellido = params.apellido;
    userModel.usuario = params.usuario;
    userModel.correo = params.correo;
    userModel.tipo = tipo;
  
  
    bcrypt.hash(params.password, null, null, (err, passwordEncriptada) => {
      if (err) return console.log("error en la petición");
  
      userModel.password = passwordEncriptada
  
      userModel.findOne({ usuario: userModel.usuario }, (err, userFound) => {
        if (err) return res.status(404).send({ report: 'Error al encontrar usuario' });
        if (userFound) return res.status(202).send({ report: 'Este usuario ya existe' })
  
        userModel.save((err, userSaved) => {
          if (err) return res.status(404).send({ report: 'Error al guardar el Usuario' });
          return res.status(200).send(userSaved)
        })
      })
  
    })
  }

function mostrarUsuarios(req,res) {
    var tipo = req.user.tipo;
  
   if(tipo != administrador) return res.status(404).send({report:'No tienes los permisos necesarios'})
    userModel.find({},(err,UserFound)=>{
      if(err) return res.status(404).send({report:'Error al encontrar usuarios'});
      return res.status(200).send(UserFound)
    })
  }

function editarUsuario(req,res){
    var idUser = req.params.idUser
    var params = req.body
    var tipo = req.user.tipo;
  
    if(tipo != administrador) return res.status(404).send({report:'No tienes los permisos necesarios'})

    userModel.findByIdAndUpdate(idUser,params,(err,userUpdated)=>{
      if(err) return res.status(500).send({ report: 'Error en la petición' })
      if(userUpdated == null) return res.status(500).send({ report: 'No se actualizo el usuario'})
  
      return res.status(200).send(userUpdated)
    })
  
  }

function eliminarUsuario(req,res){
    var idUser = req.params.idUser
    var tipo = req.user.tipo;
  
    if(tipo != administrador) return res.status(404).send({report:'No tienes los permisos necesarios'})
  
    userModel.findByIdAndDelete(idUser, (err,userDeleted)=>{
      if(err) return res.status(500).send({ report: 'Error en la petición' })
      if(userDeleted == null) return res.status(500).send({ report: 'Error al eliminar el Usuario'})
  
      return res.status(200).send(userDeleted)
    })
  
  }

  module.exports = {
      Login,
      crearUsuario,
      mostrarUsuarios,
      editarUsuario,
      eliminarUsuario
  }