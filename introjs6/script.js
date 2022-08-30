function sum (a, b){
    setTimeout(() => {
        return a + b;
    }, 500);
}

const a = sum(2, 2);
console.log(a);