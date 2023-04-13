//importe desde index

const { isAexistingPath,
  isAbsolutePath,
  convertToAbsolute,
  fileExtension,
  isDirectory,
  readDirContent,
  readFiles,
  getLinksFromFile,
  validateLinksFromFile
} = require('../functionsApi')

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
    expect(fileExtension(path)).toBe(true)
  });
});

describe('readFiles', () => {
  it('Deberia rechazar al intentar leer archivo no existente', () => {
    const path = 'C:\\Laboratoria'
    const text = "ENOENT: no such file or directory, open 'C:\\Laboratoria'"
    return readFiles(path).catch(error => {
      expect(error.message).toEqual(text)
    })
  })
})
//
describe('getLinksFromFile', () => {
  it('Deberia extrar los enlaces http de archivos .md', () => {
    const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md';
    const testLink = [
      {
        text: 'Node Fs module',
        href: 'http://bit.ly/42PEvGEsss',
        file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
      },
      {
        text: 'Prueba error',
        href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
        file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
      },
      {
        text: 'Node Path module',
        href: 'https://bit.ly/3Kgry1C',
        file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
      },
      {
        text: 'otherLink',
        href: 'https://google.com',
        file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
      },
      {
        text: 'Using the File System module (‘fs’) in Node.js',
        href: 'http://bit.ly/3Zygdyn',
        file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
      },
      {
        text: 'Prueba error dos',
        href: 'https://developer./',
        file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
      }
    ]
    return getLinksFromFile(path).then(link => {
      expect(link).toEqual(testLink)
    })

    //promesa then ?

  });
  it('Deberia rechazar  al intentar extraer links de archivos no validos', () => {
    const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\falso.js'
    const text = "ENOENT: no such file or directory, open 'C:\\Laboratoria Proyectos\\DEV003-md-links\\Laboratoria ProyectosDEV003-md-linkspruebauno♀also.js'"
    return getLinksFromFile(path).catch(error => {
      expect(error.message).toEqual(text)
    })
  })
  //it('Deberia retornar error con un path relativo')
});

// describe('validateLinksFromFile',() =>{
//   it('Debería extraer  los enlaces http de los archivos con su status', ()=> {
//     const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md';
//     const testLink= [
//       {
//         href: 'http://bit.ly/42PEvGEsss',
//         file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md',
//         text: 'Node Fs module',
//         status: 404,
//         message: 'Ok'
//       },
//       {
//         href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
//         file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md',
//         text: 'Prueba error',
//         status: 404,
//         message: 'Ok'
//       },
//       {
//         href: 'https://bit.ly/3Kgry1C',
//         file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md',
//         text: 'Node Path module',
//         status: 200,
//         message: 'Ok'
//       },
//       {
//         href: 'https://google.com',
//         file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md',
//         text: 'otherLink',
//         status: 200,
//         message: 'Ok'
//       },
//       {
//         href: 'http://bit.ly/3Zygdyn',
//         file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md',
//         text: 'Using the File System module (‘fs’) in Node.js',
//         status: 200,
//         message: 'Ok'
//       },
//       {
//         href: 'https://developer./',
//         file: 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md',
//         text: 'Prueba error dos',
//         status: 400,
//         message: 'Fail'
//       }
//     ]
//     return validateLinksFromFile(path).then(link=>{
//       expect(link).toEqual(testLink)

//     })
//   })
// })
// describe('isDirectory', () => {
//   it('Deberia retornar true', () => {
//     const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno'
//     expect(isDirectory(path)).toBe(true)
//   })
//   it('Deberia retornar false', () => {
//     const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
//     expect(isDirectory(path)).toBe(false)
//   })
// });

