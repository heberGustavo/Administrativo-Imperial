$(document).ready(function () {
    AtivarTelaAtual();
});

function AtivarTelaAtual() {
    //Verifica URL Atual
    var urlAtual = location.href.split('/').pop();

    $('#sidenav-collapse-main a.nav-link').each(function (index, element) {

        var nomePaginaAtiva = $('.nome-pagina-ativa');
        var nomeTelaNav = $(this).find('.nome-tela').text();

        if (urlAtual == nomeTelaNav.replace(' ', '')) {
            var ativar = this;
            $(ativar).addClass('active')
            $(nomePaginaAtiva).text(nomeTelaNav)
        }
    });
}