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
const mdLinks = (path, options) => {
  //retorna una promesa que toma un callback
  return new Promise((resolve, reject) => {
    const toAbsolute = convertToAbsolute(path);
    //se ingresa una ruta, se comprueba si la ruta existe
    if (isAexistingPath(path) === true) {
      (console.log("si es ruta, continua la promesa"))

      if (isAexistingPath(toAbsolute)) {
        console.log("sigue la promesa")
      }
      // const toAbsolute = convertToAbsolute(path);
      // if(isAbsolutePath(path) === false)
      // console.log("convierte a absoluta")
    } else {
      //si no existe la ruta reject a la promesa
      reject('La ruta no existe')
    }
    if (fileExtension(toAbsolute)) {
      (console.log("es md, continua la promesa"))
    }
    else {
      reject("no es archivo md")
    }
    getLinksFromFile(path).then((respuesta) => {
      (respuesta)
      console.log("lee los archivos", respuesta)
    })

  });

}
//se exporta el modulo
module.exports = {
  mdLinks
};
