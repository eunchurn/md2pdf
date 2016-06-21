var fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    pandoc = require('node-pandoc');
  
exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};
var files = '';
exports.upload = function(req, res){

    files = req.files.files; // files array
    // fs.rename(files.path,'temp/file.md', function (err) {
    fs.rename(files.path,'temp/'+files.name, function (err) {
        if (err) {
            res.send('Error upload files');
            return false;
        }
    });
    // for( var i=0; i<files.length; i++ ){
    //     console.log(files[i].path)
    //     fs.rename( files[i].path, '/temp/'+files[i].name, function( error ){
    //         if( error ){
    //             res.send( 'Error upload files' );
    //             return false;
    //         }
    //    });
    // }
    console.log(files.name);
    var args = '-f markdown -t latex -s -o temp/'+files.name.slice(0,files.name.lastIndexOf("."))+'.pdf --latex-engine=xelatex --variable mainfont="AritaM"';
    var mdfile = 'temp/'+files.name;
    console.log(args);
    console.log(mdfile);


    pandoc(mdfile,args,function (err, result) {
        if (err) {
            console.log(err);
            return;
        } 
            // res.redirect('back');
            file = 'temp/'+files.name.slice(0,files.name.lastIndexOf("."))+'.pdf';
            var mimetype = mime.lookup(file);
            res.setHeader('Content-type', mimetype);
            var filestream = fs.createReadStream(file);
            filestream.pipe(res);
        
        // if (err) {
        //     console.log(err);
        // } else {
        //     res.send(result);
        // }
    });
    // res.send( 'Success upload files' );
    // res.send(files.path+'/temp/'+files.name);
};
  
exports.download = function(req, res){
        file = 'temp/'+files.name.slice(0,files.name.lastIndexOf("."))+'.pdf', // file path
        filename = path.basename(file),
        mimetype = mime.lookup(file);
    console.log(filename);
    console.log(mimetype);
    // res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);
  
    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
};