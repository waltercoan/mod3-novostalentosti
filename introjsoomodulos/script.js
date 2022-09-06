let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234","999999999"
    ]
};

console.log(typeof(pessoa));
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
pessoa.nome = "Zezinho da Silva";
console.log(pessoa.nome);
pessoa['nome'] = "Zezinho da Silva Sauro";
console.log(pessoa['nome']);

pessoa.endereco = "Rua lalala 100";
console.log(pessoa);

console.log(JSON.stringify(pessoa));

let objTexto = '{"nome":"mariazinha"}';
let objjs = JSON.parse(objTexto);
console.log(objjs);