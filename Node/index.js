'use strict'

const app = require('./app');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userModel = require('./src/models/user.model');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/librería', {useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{

    var usuario = 'adminpractica';
    var password = 'adminpractica';
    var tipo = 'admin';
    var User = new userModel();

    User.usuario = usuario;
    User.tipo = tipo;

    userModel.find({ usuario : usuario }).exec((err,userFound)=>{
        if(userFound && userFound.length >= 1) return console.log("Ya existe el usuario administrador");

        bcrypt.hash(password, null, null, (err, encryptedPasswords)=>{
            if(err) return console.log("error en la petición");

            User.password = encryptedPasswords;

            User.save((err,userSave)=>{
                if(err) return console.log("error en la peticion guardar");
                if(userSave){
                    return console.log(userSave);
                }else{
                    return console.log("usuario no guardado")
                }
            })
        })
    })

    app.listen(3000, function(){
    })

}).catch(err => console.log(err))