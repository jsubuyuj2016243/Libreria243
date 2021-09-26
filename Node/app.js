'use strict'


const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

//[rutas]
const user_rutes = require("./src/rutes/user.rutes");
const book_rutes = require("./src/rutes/book.rutes");


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(cors());


app.use('/api',
user_rutes,book_rutes);


module.exports = app;