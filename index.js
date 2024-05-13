const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Endpoint /oi -> Olá, mundo!
app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})

app.listen(3000, function (){
    console.log("Aplicação rodando em http://localhost:3000")
})
