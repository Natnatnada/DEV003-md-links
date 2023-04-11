// work synchronously by appending Sync *

const fs = require('fs');
const path = require('path');

function isAexistingPath(docpath) {
    return fs.existsSync(docpath);
};

function isAbsolutePath(docpath) {
    return path.isAbsolute(docpath)
};

function convertToAbsolute(docpath) {
    return path.resolve(docpath)
};

function fileExtension(docpath) {
    return path.extname(docpath) === '.md';
};

//leer archivo fs.readFile (path[, encoding options], callback)  ‘utf8’.
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
//getLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then((datosdatos) => console.log(" es", datosdatos))
//promesas anidadas
// prueba  array vacio,  const link = getLinksFromFile(docpath) 

const validateLinksFromFile = (arrayLinks) => {
    const getStatus = arrayLinks.map((link) => {
        return fetch(link.href)
            .then((resolveLink) => {
                const status = {
                    href: link.href,
                    file: link.file,
                    text: link.text,
                    status: resolveLink.status,
                    message: 'Ok',

                };
                return status;
            }).catch((errorLink) => {
                const statusError = {
                    href: link.href,
                    file: link.file,
                    text: link.text,
                    status: errorLink.statusError, //|| 400, //corregir errorLink.message
                    message: 'Fail',

                };
                return statusError;
            });
    });
    return Promise.all(getStatus);
};
//promesas anidadas
// getLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md')
//     .then((datosdatos) => {
//         console.log(" es", datosdatos)
//         validateLinksFromFile(datosdatos).then((resultados) => { console.log('retorno ', resultados) })
//             //.catch(errorLink => console.log('ESTO ES ERROR', errorLink))
//     })


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
    validateLinksFromFile,
    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};