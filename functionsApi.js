// //se importa node file system module, interact with the file system. para acceder a los metodos   
// work synchronously by appending Sync *

const fs = require('fs');
//se importa node path module
const path = require('path');


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
    const arrayOfLinks = []; //array vacio para almacenar los link extraidos
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
                arrayOfLinks.push({
                    text: isAmatch[1],
                    href: isAmatch[2],
                    file: docpath,
                });
                isAmatch = patternLinks.exec(data);
            }
            (resolve(arrayOfLinks));
        })
        .catch((error) => reject(error));
});
getLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then((datosdatos) => console.log(" es", datosdatos))

// //debe tomar el array de links
// const validateLinksFromFile = (arrayLinks) => {
//     const getStatus = arrayLinks.map((link) => {
//         return fetch(link.href)
//             .then((resolveLink) => {
//                 const status = {
//                     href: link.href,
//                     file: link.file,
//                     status: resolveLink.status,
//                     message: "status",

//                 };
//                 return status;
//             }).catch((error) => {
//                 const statusError = {
//                     href: link.href,
//                     file: link.file,
//                     status: 'fail',
//                     message: error,

//                 };
//                 return statusError;
//             });
//     });
//     return Promise.all(getStatus);
// };

// validateLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then((resultados) => console.log("status", resultados))

// const validateLinksFromFile= (linksFromFile) => new Promise ((resolve, reject) =>{}
// )

//validate links
// href:
// text: 
// file:
// status: 
// message:

//saber si es un directorio fs.lstatSync o fs.statSync .isDirectory

// function isDirectory(docpath) {
//     return fs.statSync(docpath).isDirectory()

// }
//console.log(isDirectory('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'))

//recorrer directorio en busca de archivos
//extraer los archivos ?


module.exports = {
    isAexistingPath,
    isAbsolutePath,
    convertToAbsolute,
    fileExtension,
    readFiles,
    getLinksFromFile,

    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};