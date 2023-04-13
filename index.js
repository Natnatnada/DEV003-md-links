//se importa el modulo file system module
const {
  isAexistingPath,
  isAbsolutePath,
  convertToAbsolute,
  fileExtension,
  readFiles,
  getLinksFromFile,
  validateLinksFromFile,

} = require('./functionsApi');

//necesita como parametros path y opciones
const mdLinks = (path, opt) => {
  //retorna una promesa que toma un callback
  return new Promise((resolve, reject) => {
    //se ingresa una ruta, se comprueba si la ruta existe
    if (isAexistingPath(path) === false) { //es necesario el true
      reject('La ruta no existe')
    }
    const toAbsolute = convertToAbsolute(path);
    // if (isAexistingPath(toAbsolute)) {
    //   console.log("prueba que existe el path,sigue la promesa")
    // } else {
    //   //si no existe la ruta reject a la promesa
    //   reject('problemas para convertir el archivo')
    // }
    if (fileExtension(toAbsolute) === false) {
      reject('No es md, rechaza')
    }
    // readFiles(toAbsolute).then((respuesta) => {// revisar si va
    //   console.log('ESTO ES', respuesta);
    // })
    if (opt.validate) {
      getLinksFromFile(toAbsolute).then((respuesta) => {
        validateLinksFromFile(respuesta).then((retornovalidado) => {
          resolve(retornovalidado)
          console.log("prueba obtiene links, ", retornovalidado)
        })
          .catch((error) => {
            console.log('prueba error ', error)
          });
      })
    } // else{resolve getLinksFromFile(path).then((respuesta) //retorna links sin validar}

    //stats pendiente
    //mdLinks pruebauno\archivoprueba.md --validate


    // getLinksFromFile(path).then((respuesta)=>{
    //   console.log('ESTO ES',respuesta);
    // })
    //opt
    // getLinksFromFile(path).then((respuesta) => {
    //   validateLinksFromFile(respuesta).then((retornodevalidate) => {
    //     resolve(retornodevalidate);
    //     console.log("prueba obtiene links, ", retornodevalidate)
    //   })
    //     .catch((error) => {
    //       console.log('prueba error ', error)
    //     });
    // });



    // readFiles(path).then((respuesta) => {
    //   (respuesta)
    //   console.log("prueba lee archivo, continua la promesa", respuesta)
    // })

    // if (options.validate === true) {
    //   getLinksFromFile(path).then((respuesta) => {
    //     validateLinksFromFile(respuesta).then((respuesta) => {
    //       resolve(respuesta);
    //       console.log("prueba obtiene links, se resuelve la promsea?", respues)
    //     })
    //       .catch((error) => {
    //         console.log('prueba error ', error)
    //       });
    //   });
    // }// else 

    //validate links
  });

}
mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md', { validate: true }).then((final) => {
  (final)
})
  .catch((error) => console.log(error))
//se exporta el modulo
module.exports = {
  mdLinks
};
