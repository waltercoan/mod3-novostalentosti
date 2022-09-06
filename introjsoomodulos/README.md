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

