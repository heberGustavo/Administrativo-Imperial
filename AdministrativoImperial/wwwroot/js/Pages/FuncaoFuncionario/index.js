var nome;
var tabelaFuncao;

$(document).ready(function () {
    InicializaVariaveis();
});

function InicializaVariaveis() {
    nome = $('#nome');
    tabelaFuncao = $('#tabelaFuncao tbody');
}

function ModalFuncao() {
    $('#modalFuncao').modal('show');
}

function VerificarCamposObrigatorios() {
    if (IsNullOrEmpty(nome.val())) {
        MostrarModalErroCampoObrigatorioNaoPreenchido('Nome');
        return false;
    }

    return true;
}

function BuscarListaFuncaoFuncionario() {

    $.ajax({
        url: "/FuncaoFuncionario/ObterTodasFuncoes",
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        dataType: "json",
        success: function (response) {
            PreencherTabelaFuncoes(response);
        },
        error: function (response) {
            console.log(response);
            swal("Erro", "Aconteceu um imprevisto. Contate o administrador", "error");
        }
    });

}

function PreencherTabelaFuncoes(dados) {
    tabelaFuncao.html("");

    $(dados.resultado).each(function () {
        var linhaParte1;
        var linhaParte2;
        var linhaParte3;

        linhaParte1 = `<tr>
                        <td>
                            <div class="d-flex px-3 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">${this.nome}</h6>
                                </div>
                            </div>
                        </td>
                        <td class="align-middletext-sm">`

                        if (this.excluido == false) {
                            linhaParte2 = `<span class="badge badge-sm bg-gradient-success">Ativo</span>`
                        }
                        else {
                            linhaParte2 = `<span class="badge badge-sm bg-gradient-secondary">Desativo</span>`
                        }

                        linhaParte3 =
                        `</td>
                        <td class="align-middle">
                            <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Edit
                            </a>
                        </td>
                    </tr>`;

        tabelaFuncao.append(linhaParte1 + linhaParte2 + linhaParte3)
    });
}

function LimparCamposModal() {
    nome.val('')
}

function ModalFuncaoFechar() {
    LimparCamposModal();
    AlterarVisibilidadeAtualModal('modalFuncao');
}