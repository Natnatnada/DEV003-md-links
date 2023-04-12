const {
    mdLinks
} = require('./index');


// C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js
// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
mdLinks().then(() => { })
    .catch((error) => {
        console.log(error)
    });