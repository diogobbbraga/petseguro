var complineCriarProcesso = function() {

    var axios = require("axios");
    
    var url = "https://gateway.gr1d.io/production/compline/signature/v1/create";
    var headers = {
         'headers': { 
             ' X-Api-Key': '905a3d56-2b15-40ae-b57a-c981d0589c99',
             'Accept':'application/json',
             'Content-Type':'application/json',
            } 
        };
    
    axios.post(url, headers).then(function(resposta){
        console.log(resposta.status);
        console.log(resposta.data);
        return resposta.data;
    }).catch(error => {
        console.log(error);
        return {};
    });
    }
    
    module.exports = complineCriarProcesso;