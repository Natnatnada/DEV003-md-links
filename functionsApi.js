// work synchronously by appending Sync *
// to access and interact with the file system.
const fs = require('fs');
//se importan los modulos para trabajar con directorios y rutas
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
            //si da error se rechaza la promesa
            if (error) {
               // console.log('Failed to read file');
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
        //manejar la resolución de la promes
        .then((data) => { //valor resuelto de la promesa
            //se define pattern para la obtencion de los links [] y https
            const patternLinks = /\[(.+?)\]\((https?:\/\/[^\s]+)\)/g;
            // exec() function is used to search for a string in a particular string. It is a part of the RegExp object.
            let isAmatch = patternLinks.exec(data);
            //se ejecuta ciclo while mientras que isAmatch no sea null, si no hay mas coincidencia se resuelve
            while (isAmatch !== null) {
                //coincidencia capturada por regex
                arrayOfLinks.push({
                    text: isAmatch[1],
                    href: isAmatch[2],
                    file: docpath,
                });
                isAmatch = patternLinks.exec(data);
            }
            (resolve(arrayOfLinks));
        })
        .catch((error) => reject(error)); // test pendiente
});
//getLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js').then((datosdatos) => console.log(datosdatos))

const validateLinksFromFile = (arrayLinks) => { //test pendiente 
    const getStatus = arrayLinks.map((link) => { //arraynuevo
        return fetch(link.href) //llamada fetch() con el enlace de referencia  solicitud HTTP, se resuelve la promesa con la respuesta
            .then((resolveLink) => {
                const status = {
                    href: link.href,
                    file: link.file,
                    text: link.text,
                    status: resolveLink.status,
                    message: 'Ok',

                };
                return status; //  valor nuevo array
            }).catch((errorLink) => {
                const statusError = {
                    href: link.href,
                    file: link.file,
                    text: link.text,
                    status: errorLink.statusError || 400,//corregir 404, operador ternario 400, 499
                    message: 'Fail',

                };
                return statusError;
            });
    });
    return Promise.all(getStatus); //al estar todas las promesas resueltas se devuelven los valores de estas promesas resueltas,
    //que serian con estados validades incluidos
};
//promesas anidadas


// Links totales
const totalStatus = (links) => {
    const totalLinkStatus = links.length; //
    return totalLinkStatus;
};
// Links rotos
const failStatus = (links) => {
    const failLinks = links.filter((link) => link.message === 'Fail'); //determino que message para filtro
    return (failLinks.length);
};
const okStatus = (links) => {
    const okLinks = links.filter((link) => link.message === 'Ok'); //determino que message para filtro
    return (okLinks.length);
};



module.exports = {
    isAexistingPath,
    isAbsolutePath,
    convertToAbsolute,
    fileExtension,
    readFiles,
    getLinksFromFile,
    validateLinksFromFile,
    totalStatus,
    failStatus,
    okStatus,

};