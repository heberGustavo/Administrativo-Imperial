$(document).ready(function () {

});

function ModalFuncaoSalvar() {

    if (VerificarCamposObrigatorios()) {
        var json = ObterDadosTelaJsonCadastrar();

        $.ajax({
            url: "/FuncaoFuncionario/Cadastrar",
            type: "POST",
            contentType: 'application/json; charset=UTF-8',
            dataType: "json",
            data: JSON.stringify(json),
            success: function (response) {
                if (!response.erro) {
                    swal("Sucesso", response.mensagem, "success").then((confirm) => {
                        if (confirm) {
                            BuscarListaFuncaoFuncionario();
                            LimparCamposModal();
                            AlterarVisibilidadeAtualModal('modalFuncao');
                        }
                    });
                }
                else {
                    swal("Opss", response.mensagem, "error");
                }
            },
            error: function (response) {
                console.log(response);
                swal("Erro", "Aconteceu um imprevisto. Contate o administrador", "error");
            }
        });

    }
}

function ObterDadosTelaJsonCadastrar() {
    return {
        nome: nome.val(),
    }
}