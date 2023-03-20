// //se importa node file system module para acceder a los metodos     
// work synchronously by appending Sync *
const fs = require('fs')
//se importa node path module
const path = require('path')

//para saber si una ruta existe fs.existsSync(path) retorna un booleano  // fs.exists deprecated
function isValidPath(docpath) {
    return fs.existsSync(docpath);
}
//para saber si es una ruta absoluta path.isAbsolute(path) retorna un booleano
function isAbsolutePath(docpath){
    return path.isAbsolute(docpath)

}

// //convertir la ruta a  
// w3school relative()	Returns the relative path from one specified path to another specified path
// w3school resolve()	Resolves the specified paths into an absolute path
//saber si es un directorio .isDirectory
//obtiene la extension del archivo para saber si es md path.extname(path)
//si es directorio debe recorrer los archivos
module.exports = {
    isValidPath,
    isAbsolutePath
    //aqui se indican las rutas que se estan exportando para luego usar en mdlinks
};