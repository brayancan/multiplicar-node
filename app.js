const argv = require('./config/yargs').argv;
var colors = require("colors");

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
          .then((archivo) =>
            console.log(`Archivo creado: `, colors.green(archivo))
          )
          .catch((err) => console.log(err));
        //console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
}

// let base = 'abc';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);