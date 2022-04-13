$(document).ready(function () {
});

function ModalFuncionario() {
    $('#modalFuncionario').modal('show');
}

function VerificaCheckClicado() {

    var selecionado = RetornaSelecionado();

    var itemSelecionado = $(selecionado).attr('id')

    if (itemSelecionado == 'customRadioDiaria') {
        $('#grupo-diaria').removeClass('d-none');
        $('#grupo-mensal').addClass('d-none');
    }
    else if (itemSelecionado == 'customRadioMensal') {
        $('#grupo-mensal').removeClass('d-none');
        $('#grupo-diaria').addClass('d-none');
    }

}

function RetornaSelecionado() {
    var item;

    $('input[type=radio]:checked').each(function () {
        item = this;
    })

    return item;
}