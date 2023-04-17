const {
    mdLinks
} = require('./index');
const {
    totalStatus,
    failStatus,
} = require('./functionsApi');


//Elements 0 and 1 are not "arguments" from the script's point of view, but they are for the shell that
// invoked the script.
// So

// process.argv[0] == "node" '/usr/local/bin/node'

// process.argv[1] == "myprogram.js"

// process.argv[2] == "firstarg"

// In the node.js, the command line arguments are always stored in an array. In that array, the first element is the node command we refer to because we begin the command line with word “node”. The second element is the javascript (JS) file we refer to that often comes after the node command.


//incluir stats
// process.argv[]  que va primero
// process.argv[] donde va validate
//process.argv[1] seria mdlinks
//process.argv[2] seria el path


const path = process.argv[2]; //asigna argumentos que pasan por la linea de comando, en este caso la ruta,
const opt = { validate: true }; //{ validate: true } { validate: validate };
const validate = process.argv.includes('--validate') || opt.includes('--v')
const stats = process.argv.includes('--stats')// || opt.includes('--s')

mdLinks(path, opt).then(result => {
    //if path.length es 0, console.log debes ingresa una ruta
    const links = result
    if (validate) {
        console.log(links) //deberian retornar loslinks resueltos?
    } else if (validate && stats) {
        console.log(links)
        // console.log(`Link totales encontrados ${totalStatus(result)}`);
        // console.log(`Links con status fail ${failStatus(result)}`);
    } else if (stats) {
        // console.log(`Link totales encontrados ${totalStatus(result)}`);
        // console.log(`Links con status fail ${failStatus(result)}`);
    }
}).catch(error => {
    console.log(error)
})

// mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md', { validate: true }).then((final) => {
//     (final)
//   })
//     .catch((error) => console.log(error))


// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js'
// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'

