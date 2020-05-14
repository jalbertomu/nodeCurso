const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }.command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }))
    .help().argv;


//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv)
console.log(argv.b)


let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log(listarTabla(argv.b, argv.l));
        break;
    case 'crear':
        crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido')
}


//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));