/*ESSE CODIGO RODA NO NAVEGADO DO CLIENTE */
(function(){
    //let reftabela = document.getElementById("clientes");
    $("#clientes").on("click",".js-delete", function(){
        let botaoClicado = $(this);
        alert(botaoClicado.attr("data-id"));

    });
})();