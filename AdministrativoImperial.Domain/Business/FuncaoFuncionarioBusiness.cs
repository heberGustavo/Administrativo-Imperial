using AdministrativoImperial.Domain.Business.Base;
using AdministrativoImperial.Domain.IBusiness;
using AdministrativoImperial.Domain.IRepository;
using AdministrativoImperial.Domain.IRepository.Base;
using AdministrativoImperial.Domain.Models.Common;
using AdministrativoImperial.Domain.Models.EntityDomain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AdministrativoImperial.Domain.Business
{
    public class FuncaoFuncionarioBusiness : BusinessBase<FuncaoFuncionario>, IFuncaoFuncionarioBusiness
    {
        private readonly IFuncaoFuncionarioRepository _funcaoFuncionarioRepository;

        public FuncaoFuncionarioBusiness(IFuncaoFuncionarioRepository funcaoFuncionarioRepository) : base(funcaoFuncionarioRepository)
        {
            _funcaoFuncionarioRepository = funcaoFuncionarioRepository;
        }

        public async Task<IEnumerable<FuncaoFuncionario>> ObterCadastrados()
            => await _funcaoFuncionarioRepository.GetAllAsync(x => x.nome, y => y.excluido == true);

        public async Task<ResultResponseModel> Cadastrar(FuncaoFuncionario funcaoFuncionario)
        {
            try
            {
                var idCadastrado = await _funcaoFuncionarioRepository.CreateAsync(funcaoFuncionario);
                if (idCadastrado > 0)
                    return new ResultResponseModel(false, "Função cadastrada com sucesso!");
                else
                    return new ResultResponseModel(true, "Erro ao cadastrar Função. Tente novamente!");
            }
            catch(Exception e)
            {
                return new ResultResponseModel(true, "Erro ao cadastrar Função. Entre em contato com o Administrador.");
            }
        }

        public async Task<IEnumerable<FuncaoFuncionario>> ObterCadastradosAtivos()
            => await _funcaoFuncionarioRepository.GetAllAsync(x => x.excluido == false);

        public async Task<IEnumerable<FuncaoFuncionario>> VerificarFuncaoFuncionarioPorNome(string nome)
            => await _funcaoFuncionarioRepository.GetAllAsync(x => x.nome == nome);
    }
}
