/*ESSE CODIGO RODA NO NAVEGADO DO CLIENTE */
(function(){
    //let reftabela = document.getElementById("clientes");
    $("#clientes").on("click",".js-delete", function(){
        let botaoClicado = $(this);
        $("btnsim").attr("data-id", botaoClicado.attr("data-id"));
        $("#meumodal").modal("show");
    });
})();