// //se importa node file system module para acceder a los metodos     
// work synchronously by appending Sync *
const fs = require('fs')
//se importa node path module
const path = require('path')

//para saber si una ruta existe fs.existsSync(path) retorna un booleano test ok // fs.exists deprecated
function isAexistingPath(docpath) {
    return fs.existsSync(docpath);
}
//console.log(isAexistingPath('README.md')) //pruebauno\archivoprueba.md

//para saber si es una ruta absoluta path.isAbsolute(path) retorna un booleano, test ok
function isAbsolutePath(docpath) {
    return path.isAbsolute(docpath)

}
// console.log(isAbsolutePath('/archivoprueba.md'));

// convertir la ruta relativa a absoluta  retorna string path.resolve 
function convertToAbsolute(docpath) {
    return path.resolve(docpath)
}
//console.log(convertToAbsolute('./pruebauno/archivoprueba.md')); // ubicar bien la carpeta

//obtiene la extension del archivo retorna string path.extname(path)
function isAmdFile(docpath){
    return path.extname(docpath)
}
// console.log(isAmdFile('./pruebauno/archivoprueba.md'))
// console.log(isAmdFile('./pruebauno/falso.js'))

//leer archivo fs.readFile (path[, options], callback) encoding  ‘utf8’.
function readFiles(docpath){
    return fs.readFile(docpath, 'utf8', function (error, data){
        if (error){
            console.log('Failed to read file');
            return error
        }
        console.log(data)
        
    });
    }
console.log(readFiles('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'))
//saber si es un dirnectorio .isDirectory

//obtener el contenido de un directorio readdirSync.

//recorrer directorio en busca de archivos





//extraer los archivos

//El valor de retorno de nuestra librería es una Promesa, no un Array.

module.exports = {
    isAexistingPath,
    isAbsolutePath,
    convertToAbsolute,
    isAmdFile,
    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};