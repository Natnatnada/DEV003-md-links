//importe desde index

const { isAexistingPath,
  isAbsolutePath,
  convertToAbsolute,
  fileExtension,
  isDirectory,
  readDirContent
} = require('../functionsApi')
//revisar test proyecto2
//deberia retornar false si la ruta no existe,  este caso
describe('isAexistingPath', () => {
  it('Deberia retornar false para el path READMEUNO.md.', () => {
    //ruta falsa
    const path = 'READMEUNO.md'
    expect(isAexistingPath(path)).toBe(false)
  });
  it('Deberia retornar true para el path.', () => {
    //ruta verdadera
    const path = 'README.md'
    expect(isAexistingPath(path)).toBe(true)
  });
});

describe('isAbsolutePath', () => {
  it('Deberia retornar isAbsolutePath true.', () => {
    const path = '/archivoprueba.md'
    expect(isAbsolutePath(path)).toBe(true)
  });
  it('Deberia retornar isAbsolutePath false.', () => {
    const path = 'archivoprueba.md'
    expect(isAbsolutePath(path)).toBe(false)
  });
});

describe('convertToAbsolute', () => {
  it('Deberia retornar la ruta absoluta.', () => {
    const path = './pruebauno/archivoprueba.md'
    //doble backslash para que tome la ruta
    expect(convertToAbsolute(path)).toBe('C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md')
  });
});

describe('fileExtension', () => {
  it('Deberia retornar si es extension .md', () => {
    const path = 'archivoprueba.md'
    expect(fileExtension(path)).toBe('.md')
  });
});

describe('isDirectory', () => {
  it('Deberia retornar true', () => {
    const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'
    expect(isDirectory(path)).toBe(true)
  })
  it('Deberia retornar false', () => {
    const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
    expect(isDirectory(path)).toBe(false)
  })
});

describe('readDirContent', ()=>{
  const path ='C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'
  it ('deberia retornar un array con el contenido del directorio', () =>{
    expect(readDirContent(path)).toEqual([ 'archivoprueba.md', 'falso.js', 'pruebas.md' ])
  });
});
