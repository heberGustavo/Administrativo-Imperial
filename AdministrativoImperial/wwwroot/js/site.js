$(document).ready(function () {
    AtivarTelaAtual();
});

function AtivarTelaAtual() {
    //Verifica URL Atual
    var urlAtual = location.href.split('/').pop();

    $('#sidenav-collapse-main a.nav-link').each(function (index, element) {

        var nomeTela = $(this).find('.nome-tela').text().replace(' ', '');

        if (urlAtual == nomeTela) {
            var ativar = this;
            $(ativar).addClass('active')
        }
    });
}