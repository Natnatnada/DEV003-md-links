// //se importa node file system module para acceder a los metodos     
// work synchronously by appending Sync *
const fs = require('fs')
//se importa node path module
const path = require('path')

//para saber si una ruta existe fs.existsSync(path) retorna un booleano test ok // fs.exists deprecated
function isValidPath(docpath) {
    return fs.existsSync(docpath);
}
//console.log(isValidPath('README.md'))

//para saber si es una ruta absoluta path.isAbsolute(path) retorna un booleano, test ok
function isAbsolutePath(docpath) {
    return path.isAbsolute(docpath)

}
// console.log(isAbsolutePath('/archivoprueba.md'));

// convertir la ruta relativa a absoluta path.resolve? 
function convertToAbsolute(docpath) {
    return path.resolve(docpath)
}
//console.log(convertToAbsolute('./pruebauno/archivoprueba.md'));

//saber si es un directorio .isDirectory

//obtiene la extension del archivo para saber si es md path.extname(path)

//leer los archivos !!!!!

//si es directorio debe recorrer los archivos

//contiene archivos md

//extraer los archivos

module.exports = {
    isValidPath,
    isAbsolutePath,
    convertToAbsolute
    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};