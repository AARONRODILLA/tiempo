const axios = require('axios');

const getClima = async(lat = 139, lng =35)=>{
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lng=${lng}&appid=d0f302757b41a718909208ff09ccbcd6`);

    return resp;
}
module.exports.getClima = getClima;