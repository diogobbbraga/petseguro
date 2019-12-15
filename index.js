//var func = require("./materaPagamento");
//console.log(func());

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.get('/', function(req, res){
    res.render('proj/index')
})

app.get('/selecionar', function(req, res){
    res.render('proj/selecionar')
})


app.listen(8041, function() {
    console.log('teste');
});


