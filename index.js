//var func = require("./materaPagamento");
//console.log(func());

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.use(express.static('layout'));


app.get('/', function(req, res){
    res.render('proj/index')
})

app.get('/selecionar', function(req, res){
    res.render('proj/selecionar')
})

app.get('/resgatar', function(req, res){
    res.render('proj/resgatar')
})

app.get('/dashboard', function(req, res){
    res.render('proj/dashboard')
})

app.get('/contrato', function(req, res){
    res.render('proj/contrato')
})

app.get('/checkout', function(req, res){
    res.render('proj/checkout')
})

app.listen(80, function() {
});


