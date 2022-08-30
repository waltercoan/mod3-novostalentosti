function sum (a,b){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve( a + b);
        }, 500);
    });
}

sum(2,2).then((result) => {
    console.log(result);
});