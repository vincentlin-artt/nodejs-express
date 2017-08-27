'use strict';

var path = require('path');
var fs = require('fs');

exports.upload = function(req, res) {
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        var uploadPath = path.join(__dirname, '../uploads');        
        var wstream = fs.createWriteStream(uploadPath + '/' + filename);

        file.pipe(wstream);

        wstream.on('close', function(){
            console.log('file ' + filename + ' uploaded');
        });
    });

    req.busboy.on('finish', function(){
        res.json({status: 'file ' + filename + ' uploaded'});
    });    
};