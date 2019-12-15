var materaPagamento = function() {
var axios = require("axios");

var url = "https://varcom-mp-api-01.matera.com/v1/payments";
var headers = {
     'headers': { 
         'Api-Access-Key': '813F6952-D615-4E5C-9547-C31ABED75895',
         'Accept':'application/json',
         'Content-Type':'application/json',
         'Transaction-Hash':'0d5b5c26f517a6e0b5606234f66a883e6059f9f6e2a766e37533c0f5909dabf4',
        } 
    };

var body = {  
    "totalAmount":"10",
    "currency":"BRL",
    "externalIdentifier":"11990111455",
    "sender":{  
       "account":{  
          "accountId":"C8CD4154-58D2-BB60-8870-C1B50140C2AF"
       }
    },
    "paymentInfo":{  
       "transactionType":"InternalTransfer"
    },
    "recipients":[  
       {  
             "account":{  
                "accountId":"D8E0A966-C122-8769-131A-26DA4578D6D5"
          },
          "amount":"10",
          "mediatorFee": "1.00",
          "currency":"BRL",
          "senderComment":"Credit going to Customer 2 (11990111140)",
          "recipientComment":"Credit coming from Customer 1 (C8CD4154-58D2-BB60-8870-C1B50140C2AF)"
       }
    ]
 };


axios.post(url, body, headers).then(function(resposta){
    //console.log(resposta.status);
    console.log('resposta' + resposta.data);
    return resposta.data;
}).catch(error => {
    console.log(error);
    return null;
});
}

module.exports = materaPagamento;

