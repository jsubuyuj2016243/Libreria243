'use strict'

var jwt = require("jwt-simple");
var moment = require("moment");
var secret = 'adminpractica';

exports.createToken = function (user){
    var payload = {
        sub: user._id,
        usuario: user.usuario,
        tipo: user.tipo,
        iat: moment().unix(),
        exp: moment().day(10, 'days').unix()
    }
    return jwt.encode(payload,secret);
}