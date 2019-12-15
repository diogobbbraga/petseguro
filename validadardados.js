var validadardados = function(){ 
    var axios = require("axios");

    var url = "https://gateway.gr1d.io/production/bigdata/bigid/validacao/v1/Questions";
    var headers = { 'headers': { 'X-Api-Key': 'fe05a94f-302c-4165-b642-ddf7b67fde62' } };
    var body = {
        "Parameters": [
            "CPF=24612361008",
            "NAME=Fulano",
            "PHONE=21985334469",
            "BIRTH_DATE=1990-10-31",
            "EMAIL=fulano@gmail.com"
        ]
    };

    axios.post(url, body, headers).then(function(resposta){
        console.log(resposta.status);
        console.log(resposta.data);
        return resposta.data;
    });
}

module.exports = validadardados;