const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return;
        }
        let data = ''
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${ base }.txt ha sido creado`);
        });
    })
}

let listarTabla = (base, limite) => {
    let tablaFormateada = '';
    for (let i = 0; i <= limite; i++) {
        tablaFormateada += `${base} * ${i} = ${base * i}\n`;
    }
    return tablaFormateada;
}

module.exports = {
    crearArchivo,
    listarTabla
}