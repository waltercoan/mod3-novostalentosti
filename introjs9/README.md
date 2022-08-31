# Manipulação de Arrays do JS
### Códigos de exemplo
Como criar um array dentro do Javascript?

#### let - cria uma variavel dentro do bloco corrente
```javascript
let lista = [1,2,3,4];
let lista2 = ['a','b','c','d'];
let lista3 = ['☕','☕','🥛','☕'];
```

## MAP
Mapeia cada elemento da lista, passando por uma função que pode alterar o valor do elemento.
```javascript
let novalista = lista3.map((item) => (item ==='🥛'?'🥤':item))
```