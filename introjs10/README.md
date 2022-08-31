# Manipulação de Arrays do JS

## for/of
FOR EACH
```javascript
const lista = ['🐸','💕','😎','🐱‍🐉'];

for(let umitem of lista){
    console.log(umitem);
}
```

## Map
Estrutura de dados do tipo CHAVE VALOR.
```javascript
const mapa = new Map();

mapa.set('sapo','🐸');
mapa.set('coruja','🦉');
mapa.set('jacare','🐊');

console.log(mapa);
console.log(mapa.get('sapo'));
```

## SET
Gera uma lista de valores únicos.
```
const listavaloresunicos = new Set();
listavaloresunicos.add('🐸');
listavaloresunicos.add('🐊');
listavaloresunicos.add('🐶');
listavaloresunicos.add('🐸');
console.log(listavaloresunicos);
```

## Parâmetros padrão (Defaul Parameters)
Definir valores padrão para parâmetros de entrada
```javascript
function soma(x = 1, y = 2){
    return x + y;
}
console.log(soma()); //x = 1, y = 2
console.log(soma(3)); //x = 3, y = 2
console.log(soma(3,5)); //x = 3, y = 5

let soma2 = (x=1 , y=2) => x + y
console.log(soma2());
```