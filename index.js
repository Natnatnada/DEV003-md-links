//se importa el modulo file system module
const {
  isAexistingPath,
  //isAbsolutePath,
  convertToAbsolute,
  fileExtension,
  //readFiles,
  getLinksFromFile,
  validateLinksFromFile,

} = require('./functionsApi');

//necesita como parametros path y opciones
//opt option
const mdLinks = (path, opt) => {
  //retorna una promesa que toma un callback
  return new Promise((resolve, reject) => {
    if (isAexistingPath(path) === false) {
      reject('La ruta no existe, revisa la ruta que escribiste y vuelve a intentarlo')
    }
    const toAbsolute = convertToAbsolute(path);

    if (fileExtension(toAbsolute) === false) {
      reject('El archivo no es de extensión md, revisalo y vuelve a intentarlo!')
    }

    if (opt.validate) {
      getLinksFromFile(toAbsolute).then((respuesta) => {
        validateLinksFromFile(respuesta).then((retornovalidado) => {
          resolve(retornovalidado)
          console.log("prueba de que se cumple la promesa y se obtienen links validados, ", retornovalidado)
        })
          .catch((error) => {
            console.log('prueba error', error)
          });
      })
    } else getLinksFromFile(toAbsolute).then((respuesta) => {
      resolve(respuesta)
      console.log(respuesta) //si no se quiere validar retorna links no validados //antesreject malos
    })
  })
};

mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md', { validate: false })
  .then((final) => {
    (final)
  })
  // mdLinks('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js', { validate: true })
  // .then((final) => {
  //   (final)
  // })

  .catch((error) => console.log(error))
//se exporta el modulo
module.exports = {
  mdLinks
};
