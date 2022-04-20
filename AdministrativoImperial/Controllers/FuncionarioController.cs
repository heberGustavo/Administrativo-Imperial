using AdministrativoImperial.Domain.IBusiness;
using AdministrativoImperial.Domain.Models.EntityDomain;
using AdministrativoImperial.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace AdministrativoImperial.Controllers
{
    public class FuncionarioController : Controller
    {
        private readonly IFuncionarioBusiness _funcionarioBusiness;

        public FuncionarioController(IFuncionarioBusiness funcionarioBusiness)
        {
            _funcionarioBusiness = funcionarioBusiness;
        }

        public async Task<IActionResult> Index()
        {
            var result = await _funcionarioBusiness.ObterCadastrados();
            return View(result);
        }

        [HttpPost]
        [Route("[controller]/[action]")]
        public async Task<JsonResult> Cadastrar([FromBody] Funcionario funcioanrio)
        {
            var resultado = await _funcionarioBusiness.Cadastrar(funcioanrio);
            return Json(new { erro = resultado.erro, mensagem = resultado.mensagem } );
        }

        [HttpGet]
        [Route("[controller]/[action]")]
        public async Task<JsonResult> ObterTodosFuncionarios()
        {
            var resultado = await _funcionarioBusiness.ObterCadastrados();
            return Json(new { resultado });
        }

    }
}
