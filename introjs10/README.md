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