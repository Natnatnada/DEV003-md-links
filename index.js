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
    if (isAexistingPath(path) === false) {
      reject('La ruta no existe')
    }
    const toAbsolute = convertToAbsolute(path);

    if (fileExtension(toAbsolute) === false) {
      reject('No es md, rechaza')
    }

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
    } else getLinksFromFile(toAbsolute).then((validateLinksFromFile) => {
      reject(validateLinksFromFile) //si no se quiere validar retorna links no validados //antes resolve malos
    })
  })


};

mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md', { validate: false })
  .then((final) => {
    (final)
  })
  .catch((error) => console.log(error))
//se exporta el modulo
module.exports = {
  mdLinks
};
