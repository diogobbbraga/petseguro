var pet = function(){ 
    var axios = require("axios");

var url = "https://gateway.gr1d.io/sandbox/solutionsone/petstandard/v1/v1/Buckets";
var headers = { headers: { 'X-Api-Key': '8786dcf3-48c4-47b2-b5da-002681d11b50' } };

axios.get(url, headers).then(function(resposta){
    console.log(resposta.status);
    console.log(resposta.data);
    return resposta.data;
}).catch(error => {
    console.log('error')
    return [
        {
          "Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "Status": "Active",
          "ExpirationDate": "2019-12-15T10:18:57.122Z",
          "Size": 0,
          "Prizes": [
            {
              "CurrencyCode": "BR",
              "Value": 500
            }
          ],
          "InUse": 0
        }
      ];
});
}

module.exports = pet;
