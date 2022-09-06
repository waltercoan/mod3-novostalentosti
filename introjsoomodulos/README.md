# Orientação a objetos em Javascript

```javascript
let pessoa = {
    nome: "Zezinho",
    idade: 22
};
```
Object = qualquer estrutura que esteja dentro de chaves e que possua o padrão atributo: valor

```javascript
console.log(pessoa.nome);
console.log(pessoa['nome']);
```
Utiliza-se o operador . para acessar atributos e métodos
Utiliza-se a notação de listas para acessar atributos

```javascript
pessoa.nome = "Zezinho da Silva";
console.log(pessoa.nome);
pessoa['nome'] = "Zezinho da Silva Sauro";
console.log(pessoa['nome']);
```
Utiliza-se o mesmos operadores para acessar atributos e alterar seus valores
```javascript
pessoa.endereco = "Rua lalala 100";
console.log(pessoa);
```
É possível criar novos atributos que não existiam no objeto no momento da sua definição.

```javascript
JSON.stringify(pessoa);
```
Formata um objeto Javascript em um texto no formato JSON, para ser transferido para outra aplicação em outra linguagem de programação.

```javascript
let objTexto = '{"nome":"mariazinha"}';
let objjs = JSON.parse(objTexto);
console.log(objjs);
```
JSON.parse transforma um dado JSON texto para um objeto Javascript

```javascript
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
```
Dentro de um objeto pode haver outro objeto (cidade), ou uma lista de elementos ou objetos

```javascript
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
    ],
    geraEndereco: function(){
        return `${this.cidade.nome} - ${this.telefones[0]}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    }

};


console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));
```
Métodos são considerados propriedades que tem a referencia para uma função. Devem utilizar a palavra THIS para acessar as propriedades da instância do objeto.

```javascript
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
    ],
    geraEndereco: function(){
        let todosOsTel = "";
        for(let umTelefone of this.telefones){
            todosOsTel += umTelefone;
        }
        return `${this.cidade.nome} - ${todosOsTel}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto() {
        return this.nome;
    },
    set nomeCompleto(nome){
        this.nome = nome;
    }

};
pessoa.nomeCompleto = "Zezinho Sauro";
console.log(pessoa.nomeCompleto);
```
As palavras reservadas get e set podem ser utilizadas para criação de propriedades que dão acesso a atributos do objeto


```javascript
class Pessoa{
    constructor(){
        this.nome;
        this.idade = 0;
    }
    gerarIdentidade(){
        return `${this.nome} - ${this.idade}`;
    }
}

let umaPessoa = new Pessoa();
umaPessoa.nome = "Zezinho";
console.log(umaPessoa.nome);
console.log(umaPessoa.gerarIdentidade());
```
A palavra chave class, define uma classe que é utilizada como template para criação de novos objetos. Não é possível (ainda) criar atributos dentro do escopo da classe, todos os atributos devem ser definidos dentro do construtor. E utilizar a palavra reservada new para instanciar o objeto a partir da classe.