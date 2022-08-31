let lista3 = ['☕','☕','🥛','☕'];
//lista3[2] = '🥤';
/*for(let i=0; i<4; i++){
    if(lista3[i] === '🥛'){
        lista3[i] = '🥤';
    }
}*/
//let novalista = lista3.map((item) => (item ==='🥛'?'🥤':item))
//console.log(novalista);
/*novalista = lista3.map(function (item){
    if(item === '🥛')
        return '🥤';
    return item;
})*/

/*let novalista = lista3.map((item) => (item ==='☕'?1:0));
let total = novalista.reduce((soma, item) => soma + item);
console.log(total);


total = lista3.map((item) => (item ==='☕'?1:0))
              .reduce((soma, item) => soma + item);
console.log(total);*/

/*let novaLista = lista3.filter((item) => item === '☕');
console.log(novaLista);*/

let resultado = lista3.find((item) => item === '☕');
console.log(resultado);