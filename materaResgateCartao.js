var materaResgateCartao = function() {
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
    "externalIdentifier": "11990111451",
    "paymentInfo": {
        "transactionType": "External"
    },
    "recipients": [
        {
            "account": {
                "accountId": "C8CD4154-58D2-BB60-8870-C1B50140C2AF"
            },
            "amount": "600",
            "currency": "BRL",
            "historyCodeRecipient": "1200",
            "recipientComment": "Cash Deposit"
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

module.exports = materaResgateCartao;
