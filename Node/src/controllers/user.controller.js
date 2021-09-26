'use strict'

const jwt = require('../services/jwt');
const bcrypt = require("bcrypt-nodejs");

const userModel = require("../models/user.model");
const bookModel = require("../models/book.model");

const admin ='admin'
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
  var type = req.params.tipo;
  var params = req.body;
  var UserModel = new userModel();
  
    UserModel.carnet = params.carnet;
    UserModel.nombre = params.nombre;
    UserModel.apellido = params.apellido;
    UserModel.usuario = params.usuario;
    UserModel.correo = params.correo;
    UserModel.tipo = params.tipo;
  
  
    bcrypt.hash(params.password, null, null, (err, passwordEncriptada) => {
      if (err) return console.log("error en la petición");
  
      UserModel.password = passwordEncriptada
  
      userModel.findOne({ usuario: UserModel.usuario }, (err, userFound) => {
        if (err) return res.status(404).send({ report: 'Error al encontrar usuario' });
        if (userFound) return res.status(202).send({ report: 'Este usuario ya existe' })
  
        UserModel.save((err, userSaved) => {
          if (err) return res.status(404).send({ report: 'Error al guardar el Usuario' });
          return res.status(200).send(userSaved)
        })
      })
  
    })
  }

function mostrarUsuarios(req,res) {
    var tipo = req.user.tipo;
  
    userModel.find({},(err,UserFound)=>{
      if(err) return res.status(404).send({report:'Error al encontrar usuarios'});
      return res.status(200).send(UserFound)
    })
  }

function editarUsuario(req,res){
    var idUser = req.params.idUser
    var params = req.body

    userModel.findByIdAndUpdate(idUser,params,(err,userUpdated)=>{
      if(err) res.status(500).send({ report: 'Error en la petición' })
      console.log(err)
      if(userUpdated == null) return res.status(500).send({ report: 'No se actualizo el usuario'})
  
      return res.status(200).send(userUpdated)
    })
  
  }

function eliminarUsuario(req,res){
    var idUser = req.params.idUser
    var tipo = req.user.tipo;
  
    if(tipo != admin) return res.status(404).send({report:'No tienes los permisos necesarios'})
  
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