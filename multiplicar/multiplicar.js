const fs = require('fs');
const  colors = require("colors");

let listarTabla = (base, limite = 10) => {
    console.log('=========='.green);
     console.log(`Tabla de ${ base }`.green);
      console.log("==========".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}* ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es nuemro`);
            return;
        }

        variable = "";

        for (let i = 1; i <= limite; i++) {
            variable += `${base}* ${ i } = ${ base * i }\n`;
        }

        const data = new Uint8Array(Buffer.from(variable));
        fs.writeFile(`Tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${ limite }.txt  ha sido creado `);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}