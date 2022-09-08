const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("EU NAO ACREDITO");
})

app.listen(3000, () =>{ //CALLBACK
    console.log("Servidor online");
    console.log("http://localhost:3000/");
});

