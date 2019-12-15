var materaCreateAccountSegurado = function() {
    var axios = require("axios");

var url = "https://varcom-mp-api-01.matera.com/v1/accounts";
var headers = {
     'headers': { 
         'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
         'Accept':'application/json',
         'Content-Type':'application/json',
         'Transaction-Hash':'cff44c0cb74a94eb55f87952c0c32ccaf7e6943382bfaf44b0f66988c0c416fd',
        } 
    };

var body = { 
    "externalIdentifier":"11990111446",
    "sharedAccount":false,
    "creditDate":32,
    "client":{ 
       "name":"Customer",
       "taxIdentifier":{ 
          "taxId":"51537685201",
          "country":"BRA"
       },
       "mobilePhone":{ 
          "country":"BRA",
          "phoneNumber":"19992400618"
       },
       "email":"customer@gmail.com"
    },
    "billingAddress":{ 
       "logradouro":"CUSTOMER STREET",
       "numero":"999",
       "bairro":"NEIGHBORHOOD",
       "cidade":"CITY NAME",
       "estado":"SP",
       "cep":"13100000",
       "pais":"BRA"
    },
    "clientType":"PERSON",
    "accountType":"ORDINARY",
    "additionalDetailsPerson":{ 
       "gender":"M",
       "father":"FATHERS NAME",
       "mother":"MOTHERS NAME",
       "birthDate":"1970-01-01",
       "birthCity":"CITY NAME",
       "birthState":"SP",
       "birthCountry":"BRA",
       "rg":{ 
          "number":"325912840",
          "issueDate":"1980-01-01",
          "issuer":"SSP",
          "state":"SP"
       },
       "maritalStatus":"SINGLE"
    }
 };

axios.post(url, body, headers).then(function(resposta){
    console.log(resposta.status);
    console.log(resposta.data);
    return resposta.data;
});
}

module.exports = materaCreateAccountSegurado;
