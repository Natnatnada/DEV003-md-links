const {
    mdLinks
} = require('./index');
// C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js
// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md').then(() => { })
    .catch((error) => {
        console.log(error)
    });