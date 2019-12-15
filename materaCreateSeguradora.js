var materaCreateSeguradora = function() {
    var axios = require("axios");

var url = "https://varcom-mp-api-01.matera.com/v1/accounts";
var headers = {
     'headers': { 
         'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
         'Accept':'application/json',
         'Content-Type':'application/json',
         'Transaction-Hash':'82903841c0409fb9039f6e0542fa8aba2b2ebfea96b523d0ac933ea867cebb0b',
        } 
    };

var body = { 
    "externalIdentifier":"11990111445",
    "sharedAccount":false,
    "creditDate":32,
    "client":{ 
       "name":"COMPANY TAX ID",
       "taxIdentifier":{ 
          "taxId":"28358358000100",
          "country":"BRA"
       },
       "mobilePhone":{ 
          "country":"BRA",
          "phoneNumber":"19992400618"
       },
       "email":"COMPANY@gmail.com"
    },
    "billingAddress":{ 
       "logradouro":"STREET NAME",
       "numero":"100",
       "complemento":"ADDITIONAL INFO",
       "bairro":"NEIGHBORHOOD",
       "cidade":"CITY NAME OF THE COMPANY",
       "estado":"MT",
       "cep":"99999999",
       "pais":"BRA"
    },
    "clientType":"CORPORATE",
    "accountType":"ORDINARY",
    "additionalDetailsCorporate":{ 
       "companyName":"COMPANY NAME",
       "representatives":[ 
          { 
             "name":"LEGAL REPRESENTATIVE NAME FROM COMPANY",
             "taxIdentifier":{ 
                "taxId":"39421894375",
                "country":"BRA"
             },
             "mobilePhone":{ 
                "country":"BRA",
                "phoneNumber":"19992400618"
             },
             "email":"legal.representativ@gmail.com"
          }
       ]
    }
 };

axios.post(url, body, headers).then(function(resposta){
    console.log(resposta.status);
    console.log(resposta.data);
    return resposta.data;
});

}
module.exports = materaCreateSeguradora;