'use strict';

var path = require('path');
var fs = require('fs');
var Busboy = require('busboy');

exports.upload = function(req, res) {
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        var uploadPath = path.join(__dirname, '../uploads');        
        var wstream = fs.createWriteStream(uploadPath + '/' + filename);

        file.pipe(wstream);
/*
        wstream.on('close', function(){
            console.log('file ' + filename + ' uploaded');
        });
*/        
    });

    busboy.on('finish', function(){
        res.json({status: 'file ' + filename + ' uploaded'});
    });     

    return req.pipe(busboy);
};