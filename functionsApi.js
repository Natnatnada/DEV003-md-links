// //se importa node file system module, interact with the file system. para acceder a los metodos   
// work synchronously by appending Sync *
const fs = require('fs')
//se importa node path module
const path = require('path')

//para saber si una ruta existe fs.existsSync(path) retorna un booleano// fs.exists deprecated
function isAexistingPath(docpath) {
    return fs.existsSync(docpath);
};
//console.log(isAexistingPath('README.md')) //pruebauno\archivoprueba.md

//para saber si es una ruta absoluta path.isAbsolute(path) retorna un booleano
function isAbsolutePath(docpath) {
    return path.isAbsolute(docpath)

};
// console.log(isAbsolutePath('/archivoprueba.md'));

// convertir la ruta relativa a absoluta  retorna string path.resolve 
function convertToAbsolute(docpath) {
    return path.resolve(docpath)
};
//console.log(convertToAbsolute('./pruebauno/archivoprueba.md')); // ubicar bien la carpeta

//obtiene la extension del archivo retorna string path.extname(path)
function fileExtension(docpath) {
    return path.extname(docpath)
};
//console.log(fileExtension('./pruebauno/archivoprueba.md'))
//console.log(fileExtension('./pruebauno/falso.js'))

//leer archivo fs.readFile (path[, encoding options], callback)  ‘utf8’.
//optimizar codigo function(error data)
function readFiles(docpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(docpath, 'utf8', (error, data) => {
            if (error) {
                console.log('Failed to read file');
                reject(error)
            } else {
                //console.log('1', data);
                resolve(data)
            }
        });
    })

};
readFiles('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then((data) => console.log(data))

//saber si es un directorio fs.lstatSync o fs.statSync .isDirectory
function isDirectory(docpath) {
    return fs.statSync(docpath).isDirectory()

}
//console.log(isDirectory('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'))

//leer  el contenido de un directorio readdirSync.  returns an array of String
function readDirContent(docpath) {
    return fs.readdirSync(docpath)
};
console.log(readDirContent('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'))
//recorrer directorio en busca de archivos forEach

//extraer los archivos promesa?

//El valor de retorno de nuestra librería es una Promesa, no un Array.

module.exports = {
    isAexistingPath,
    isAbsolutePath,
    convertToAbsolute,
    fileExtension,
    readFiles,
    isDirectory,
    readDirContent,
    
    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};