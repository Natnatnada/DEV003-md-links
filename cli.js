const {
    mdLinks
} = require('./index');
const {
    totalStatus,
    failStatus,
    okStatus,
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
// process.ar   gv[] donde va validate
//process.argv[1] seria mdlinks
//process.argv[2] seria el path


const path = process.argv[2]; //asigna argumentos que pasan por la linea de comando, en este caso la ruta,
const validate = process.argv.includes('--validate');
const stats = process.argv.includes('--stats');
const option = { validate, stats}
mdLinks(path, option).then(result => {
    const links = result
    if  (option.validate === true && option.stats === true){
        console.log(`Link totales encontrados: ${totalStatus(links)}`); 
        console.log(`Links encontrados con status Fail: ${failStatus(links)}`);
        console.log(`Link encontrados con status Ok: ${okStatus(links)}`);
   
    }  else if(option.stats === true)  {
        console.log(`Link totales encontrados: ${totalStatus(links)}`);   

    } else if(option.validate === true){
        //console.log(links)
        console.log(`Links encontrados con status Fail: ${failStatus(links)}`);
        console.log(`Link encontrados con status Ok: ${okStatus(links)}`);
    }
}).catch(error => {
    console.log(error)
})
//corregir comentarios
//normalize node 
//tomar la ruta y la que ingresa que sea absoluta.


// mdLinks('README.md', { validate: true })
// .then((links) => {
//     console.log('links fail', failStatus(links))
//     console.log('Links totales', totalStatus(links))
//   })
//     .catch((error) => (error))

 
// mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md', { validate: true }).then((final) => {
//     (final)
//   })
//     .catch((error) => console.log(error))


// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js'
// 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'

