const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        descripcion: '¿De qué ciudad deseas conocer el clima?',
        demand: true
    }

}).argv;
console.log(argv.direccion);

let getInfo = async () => {
    try{
        let coors = await lugar.getLugar(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e){ console.log ('No sabemos')}
}

getInfo(argv.direccion)
    .then(mensaje=> console.log(mensaje))
    .catch(e=>console.log(e));
/* 


lugar.getLugar(argv.direccion)
    .then(resp =>{
        console.log(resp);
    })
    .catch( e => console.log(e));

clima.getClima(9.2,9.3)
    .then(temp => console.log(temp))
    .catch(e=>console.log(e)); */