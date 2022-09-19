const express = require('express');
const app = express();

const fakeData = [
    {
        id: 1,
        nome: 'Zezinho',
        endereco: 'Rua lalala 100',
        sexo: 'Masculino',
        telefone: '5555-1234'
    },
    {
        id: 2,
        nome: 'Mariazinha',
        endereco: 'Rua lulululu 200',
        sexo: 'Feminino',
        telefone: '5555-4321'
    }
];
//GET /api/v1/clientes - consulta que retorna todos os registros
app.get("/api/v1/clientes", (req,res) =>{
    //writeHead 1 define o HTTP Status + headers da resposta
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify(fakeData));
});


app.listen(3000, () =>{ //CALLBACK
    console.log("Servidor online");
    console.log("http://localhost:3000/");
});