(function (){
    /*const result = 
        await fetch("https://ws.apicep.com/cep/06233-030.json");
    console.log(result);*/

    fetch("https://ws.apicep.com/cep/06233-030.json")
    .then(function(response){ //callback
        console.log(response);
    });
    
})();