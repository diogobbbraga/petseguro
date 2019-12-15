var materaBoleto = function() {

    var axios = require("axios");
    
    var url = "https://varcom-mp-api-01.matera.com/v1/accounts/deposits";
    var headers = {
         'headers': { 
             ' X-Api-Key': '8786dcf3-48c4-47b2-b5da-002681d11b50',
             'Accept':'application/json',
             'Content-Type':'application/json',
            } 
        };
    
    var body = {
        "Status": "Active",
        "ExpirationDate": "2019-12-15T10:14:06.408Z",
        "Size": 0,
        "Prizes": [
          {
            "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        ]
      };
    
    
    axios.post(url, body, headers).then(function(resposta){
        console.log(resposta.status);
        console.log(resposta.data);
        return resposta.data;
    }).catch(error => {
        console.log(error);
        return {
            "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          };
    });
    }
    
    module.exports = materaBoleto;