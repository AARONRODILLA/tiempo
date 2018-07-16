const axios = require('axios');

const getLugar = async(direccion) => {

    let direccionCasa = encodeURI('https://maps.googleapis.com/maps/api/geocode/json?address=82+Rocafort&key=AIzaSyBqyNFBNte_dTwIcrt1PEZZDf_X_YarCaM');

    let resp = await axios.get(direccionCasa);

    if(resp.data.status === 'ZERO RESULTS') {
        throw new Error('No hay resultados para la ciudad:', direccion);
    }
            let location = resp.data.results[0];
                console.log(location.formatted_address);
                console.log(location.geometry.location.lat);
                console.log(location.geometry.location.lng);
            
            
    
    /*         console.log(JSON.stringify(resp.data, undefined, 8));
     */

    return {
        direccion:location.formatted_address,
        lat:location.geometry.location.lat,
        lng:location.geometry.location.lng
    }
}

module.exports.getLugar = getLugar;

