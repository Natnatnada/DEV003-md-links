//importe desde index
const { mdLinks } = require('../index.js')
const { isAexistingPath,
  isAbsolutePath,
  convertToAbsolute,
  isAmdFile
} = require('../functionsApi')
//revisar test proyecto2
//deberia retornar false si la ruta no existe,  este caso
describe('isAexistingPath', () => {
  it('Deberia retornar false .', () => {
    //ruta falsa
    const path = 'READMEUNO.md'
    expect(isAexistingPath(path)).toBe(false)
  });
  it('Deberia retornar true .', () => {
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
describe('isAmdFile',() => {
it('Deberia retornar  extension .md',() =>{
const path = 'archivoprueba.md'
expect(isAmdFile(path)).toBe('.md')
});
});

// describe('mdLinks', () => {

//   it('debería ser una función', () => {
//     expect(typeof mdLinks).toBe('function');
//   });
//   it('Debe rechazar si el path no existe', () => {
//     return mdLinks('/lab/proyecto/noexiste.md').catch((error) => {
//       expect(error).toBe('La ruta no existe')
//     });
//   });

// });
