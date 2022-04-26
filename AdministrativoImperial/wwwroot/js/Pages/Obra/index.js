var dataInicio;
var apelido;
var endereco;
var orcamento;
var tabelaObra;

$(document).ready(function () {
    InicializaVariaveis();
});

function InicializaVariaveis() {
    dataInicio = $('#dataInicio');
    apelido = $('#apelido');
    endereco = $('#endereco');
    orcamento = $('#orcamento');
    tabelaObra = $('#tabelaObra tbody');
}

function ModalObra() {
    $('#modalObra').modal('show');
}

function VerificarCamposObrigatorios() {
    if (IsNullOrEmpty(dataInicio.val())) {
        MostrarModalErroCampoObrigatorioNaoPreenchido('Data de Início');
        return false;
    }
    else if (IsNullOrEmpty(apelido.val())) {
        MostrarModalErroCampoObrigatorioNaoPreenchido('Apelido');
        return false;
    }

    return true;
}

function BuscarListaObras() {

    $.ajax({
        url: "/Obra/ObterTodasObras",
        type: "GET",
        contentType: 'application/json; charset=UTF-8',
        dataType: "json",
        success: function (response) {
            PreencherTabelaObras(response);
        },
        error: function (response) {
            console.log(response);
            swal("Erro", "Aconteceu um imprevisto. Contate o administrador", "error");
        }
    });

}

function PreencherTabelaFuncionarios(dados) {
    tabelaFuncionario.html("");

    $(dados.resultado).each(function () {
        var linhaParte1;
        var linhaParte2;
        var linhaParte3;
        var linha;

        console.log(dados)

        return

        linha = `<tr>
                    <td>
                        <div class="d-flex px-3 py-1">
                            <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">${this.nome}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="text-xs font-weight-bold mb-0">${this.data_inicio} - ${this.data_fim}</p>
                    </td>
                    <td class="align-middle">
                        <p class="text-xs font-weight-bold mb-0">R$ ${FormatDinheiro(ConverterParaFloat(this.orcamento))}</p>
                    </td>
                    <td class="align-middle">
                        <p class="text-xs font-weight-bold mb-0">R$ 000,00</p>
                    </td>
                    <td class="align-middletext-sm">
                        <p class="text-xs font-weight-bold mb-0">R$ 000,00</p>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                        </a>
                    </td>
                </tr>`

        tabelaFuncionario.append(linha);
    });
}

function LimparCamposModal() {
    dataInicio.val('')
    apelido.val('')
    endereco.val('')
    orcamento.val('')
}

function ModalObraFechar() {
    LimparCamposModal();
    AlterarVisibilidadeAtualModal('modalObra');
}