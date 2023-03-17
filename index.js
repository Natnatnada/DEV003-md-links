//se importa el modulo file system module
const fs = require('fs')

//necesita como parametros path y opciones
const mdLinks = (path, options) => {
  //retorna una promesa que toma un callback
  return new Promise((resolve, reject) => {
    //se ingresa una ruta, se comprueba si la ruta existe
    if ((path)) {

    } else {
      //si no existe la ruta reject a la promesa
      reject('La ruta no existe')
    }
  });

}
//se exporta el modulo
module.exports = {
  mdLinks
};
