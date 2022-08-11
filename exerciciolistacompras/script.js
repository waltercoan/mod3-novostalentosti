//closure
(function(){
    let btninserir = document.getElementById("btninserir");
    let txtproduto = document.getElementById("txtproduto");
    let itens = document.getElementById("itens");

    let lista = [];
    btninserir.onclick = click_btninserir;
   
    function click_btninserir(){
        //alert("clicou...");
        adiciona(txtproduto.value);
    }
    function adiciona(produto){
        lista.push(produto);
        atualiza_itens();
    }

    function atualiza_itens(){
        itens.innerHTML = "";
        for(let i in lista){
            let umItem = lista[i];
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(umItem));
            itens.appendChild(li);
        }
    }

})();