let pessoa = {
    nome: "Zezinho",
    idade: 22
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