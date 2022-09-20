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
    //writeHead define o HTTP Status + headers da resposta
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify(fakeData));
});

app.get("/api/v1/clientes/:id", (req,res)=>{
    //BUSCAR O CLIENTE PELO ID
    let httpStatus = 200;
    let resultado = fakeData.find(o => o.id == req.params.id);
    //VERIFICAR SE HOUVE RESULTADO
    if(resultado == undefined){
        httpStatus = 404;
    }
    //RETORNAR
    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(resultado));
});

app.get("/api/v1/clientes/nome/:nome", (req,res) =>{
    let httpStatus = 200;

    let resultado = fakeData.find(o => o.nome.includes(req.params.nome));
    if (resultado == undefined){
        httpStatus = 404;
    }
    res.writeHead(httpStatus,{"Content-Type": "application/json"});
    res.end(JSON.stringify(resultado));
});

app.post("/api/v1/clientes", (req,res)=>{
    console.log(req.body);
});

app.listen(3000, () =>{ //CALLBACK
    console.log("Servidor online");
    console.log("http://localhost:3000/");
});