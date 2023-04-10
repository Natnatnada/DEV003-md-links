//importe desde index

const { isAexistingPath,
  isAbsolutePath,
  convertToAbsolute,
  fileExtension,
  isDirectory,
  readDirContent,
  getLinksFromFile
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

describe('getLinksFromFile', () => {
  it('Deberia extrar los enlaces http de archivos .md', () => {
    const path = 'C:\\Laboratoria Proyectos\\DEV003-md-links\\pruebauno\\archivoprueba.md'
    const testLink = [
      {
        text: 'Node Fs module',
        href: 'http://bit.ly/42PEvGE',
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
      }
    ]
    return getLinksFromFile(path).then(link => {
      expect(link).toEqual(testLink)
    })

    //promesa then ?
  });
});

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

