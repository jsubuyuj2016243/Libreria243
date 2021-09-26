'use strict'

const jwt = require('../services/jwt');
const bcrypt = require("bcrypt-nodejs");

const userModel = require("../models/user.model");
const bookModel = require("../models/book.model");

const libro = 'libro'

function crearLibro(req, res) {
    var params = req.body;
    var BookModel = new bookModel();
    var tipo = req.params.tipo

      BookModel.tipo = params.tipo    
      BookModel.autor = params.autor;
      BookModel.titulo = params.titulo;
      BookModel.edicion = params.edicion;
      BookModel.claves = params.claves;
      BookModel.descripcion = params.descripcion;
      BookModel.temas = params.temas;
      BookModel.copias = params.copias;
      BookModel.disponibles = params.disponibles;
    
      if (tipo != libro) {
        BookModel.frecuencia = params.frecuencia;
        BookModel.ejemplares = params.ejemplares;
      }
    
        bookModel.findOne({ titulo: bookModel.titulo }, (err, bookFound) => {
          if (err) return res.status(404).send({ report: 'Error al encontrar un libro' });
          if (bookFound) return res.status(202).send({ report: 'Este libro ya existe' })
    
          BookModel.save((err, bookSaved) => {
            if (err) return res.status(404).send({ report: 'Error al guardar el Libro/Revista' });
            return res.status(200).send(bookSaved)
          })
        })
    
      
    }
  
function mostrarLibro(req,res) {
      var tipo = req.user.tipo;
    
      bookModel.find({},(err,bookFound)=>{
        if(err) return res.status(404).send({report:'Error al encontrar libros'});
        return res.status(200).send(bookFound)
      })
    }
  
function editarLibro(req,res){
      var idBook = req.params.idBook
      var params = req.body
  
      bookModel.findByIdAndUpdate(idBook,params,(err,bookUpdated)=>{
        if(err) return res.status(500).send({ report: 'Error en la petición' })
        if(bookUpdated == null) return res.status(500).send({ report: 'No se actualizo el libro/revista'})
    
        return res.status(200).send(bookUpdated)
      })
    
    }
  
function eliminarLibro(req,res){
      var idBook = req.params.idBook
      var tipo = req.user.tipo;
    
      bookModel.findByIdAndDelete(idBook, (err,bookDeleted)=>{
        if(err) return res.status(500).send({ report: 'Error en la petición' })
        if(bookDeleted == null) return res.status(500).send({ report: 'Error al eliminar el Libro/Revista'})
    
        return res.status(200).send(bookDeleted)
      })
    
    }

module.exports = {
        crearLibro,
        mostrarLibro,
        editarLibro,
        eliminarLibro
    }