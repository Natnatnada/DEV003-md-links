// //se importa node file system module, interact with the file system. para acceder a los metodos   
// work synchronously by appending Sync *
const { error } = require('console');
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
    return path.extname(docpath) === '.md';
};
// console.log(fileExtension('./pruebauno/archivoprueba.md'))
// console.log(fileExtension('./pruebauno/falso.js'))

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
//readFiles('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then((data) => console.log(data))

const getLinksFromFile = (docpath) => new Promise((resolve, reject) => {
    const arraOfLinks = []; //array vacio para almacenar los link extraidos
    //funcion readFiles
    readFiles(docpath)
        //data from readFile
        .then((data) => {
            //se define pattern para la obtencion de los links [] y https
            // /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
            const patternLinks = /\[(.+?)\]\((https?:\/\/[^\s]+)\)/g;
            let isAmatch = patternLinks.exec(data);
            //null si no encuentra coincidencias con isAmatch se ejecuta ciclo
            while (isAmatch !== null) {
                //
                arraOfLinks.push({
                    href: isAmatch[2],
                    text: isAmatch[1],
                    file: docpath,
                });
                isAmatch = patternLinks.exec(data);
            }
            (resolve(arraOfLinks));
        })
        .catch((error) => reject(error));
});
getLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then((linklink) => console.log(" es", linklink))



//saber si es un directorio fs.lstatSync o fs.statSync .isDirectory
function isDirectory(docpath) {
    return fs.statSync(docpath).isDirectory()

}
//console.log(isDirectory('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'))

//recorrer directorio en busca de archivos
//extraer los archivos ?

//El valor de retorno de nuestra librería es una Promesa, no un Array.

module.exports = {
    isAexistingPath,
    isAbsolutePath,
    convertToAbsolute,
    fileExtension,
    readFiles,
    isDirectory,

    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};