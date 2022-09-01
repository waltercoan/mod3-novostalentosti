(function (){
    fetch("https://ws.apicep.com/cep/06233-030.json")
    //.then((response) => console.log(response))
    .then(function(response){ //callback
        console.log(response);
    });

})();