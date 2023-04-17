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
//getLinksFromFile('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js').then((datosdatos) => console.log(datosdatos))

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
                    status: errorLink.statusError || 400,//corregir 404
                    message: 'Fail',

                };
                return statusError;
            });
    });
    return Promise.all(getStatus);
};
//promesas anidadas


// Links totales
const totalStatus = (links) => {
    const totalLinkStatus = links.length; //
    return (totalLinkStatus);
  };
  // Links rotos
  const failStatus = (links) => {
    const failLinks = links.filter((link) => link.message === 'fail'); //determino que message para filtro
    return (failLinks.length);
  };
  console.log()


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
    //uniStatus,

};