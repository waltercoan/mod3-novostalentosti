(function(){
    let lista = [];
    let txtproduto = document.getElementById("txtproduto");
    let btninserir = document.getElementById("btninserir");
    let itens = document.getElementById("itens");

    btninserir.onclick = click_btninserir;

    function click_btninserir(){
        lista.push(txtproduto.value);
        atualiza_itens();
    }

    function atualiza_itens(){
        itens.innerHTML = "";
        for(i in lista){
            let umitem = lista[i];
            let li = document. createElement("li");
            li.appendChild(document.createTextNode(umitem));
            itens.appendChild(li);
        }
    }


})();