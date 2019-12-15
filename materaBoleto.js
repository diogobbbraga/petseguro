var materaBoleto = function() {

var axios = require("axios");

var url = "https://varcom-mp-api-01.matera.com/v1/accounts/deposits";
var headers = {
     'headers': { 
         'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
         'Accept':'application/json',
         'Content-Type':'application/json',
         'Transaction-Hash':'af3c250af72d95fb9b91976219e4c7b03b6ed511581657b864fc19455b7b2869',
        } 
    };

var body = {
    "externalIdentifier": "11990111452",
    "callbackAddress": "http://webhook.site/d1742f52-efee-4d07-bc6b-667fe9b094fd",
    "paymentInfo": 
        {
            "transactionType": "Boleto",
            "boleto": 
                {
                    "bank": "341",
                    "accountingMethod": "DEF",
                    "shopperStatement": "TEXTO SOB RESPONSABILIDADE DO EMISSOR DO BOLETO (colocar aqui o texto que vai sair no campo 'Instruções')"
                }
        },
    "recipients": 
        [
            {
                "account": 
                    {
                        "accountId": "C8CD4154-58D2-BB60-8870-C1B50140C2AF"
                    },
                "amount": "600",
                "currency": "BRL"
            }
        ]
};


axios.post(url, body, headers).then(function(resposta){
    console.log(resposta.status);
    console.log(resposta.data);
    return resposta.data;
}).catch(error => {
    console.log(error);
});
}

module.exports = materaBoleto;

