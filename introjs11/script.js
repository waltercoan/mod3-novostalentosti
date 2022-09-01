(function (){
    let botao = document.getElementById("botao");
    /*const result = 
        await fetch("https://ws.apicep.com/cep/06233-030.json");
    console.log(result);*/

    botao.onclick = function() {

        fetch("https://ws.apicep.com/cep/06233-030.json")
        .then(function(response){ //callback
            //console.log(response);
            response.json().then(function(json){
                console.log(json.status);
                if(json.status === 200){
                    console.log(json.city);
                }else{
                    console.log("DEU RUIM NA API");
                }
                
            });
        });
    };
})();