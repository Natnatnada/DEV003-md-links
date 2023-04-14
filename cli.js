const {
    mdLinks
} = require('./index');
//incluir stats
// process.argv[]  que va primero
// process.argv[] donde va validate
const path = process.argv[1]; //asigna argumentos que pasan por la linea de comando
console.log(path)
const validate = process.argv.includes("--validate")  || opt.includes('--v')
const stats= process.argv.includes('--stats') || opt.includes('--s')


// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js'
// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
// 
