using AdministrativoImperial.Domain.Business.Base;
using AdministrativoImperial.Domain.IBusiness;
using AdministrativoImperial.Domain.IRepository;
using AdministrativoImperial.Domain.Models.Common;
using AdministrativoImperial.Domain.Models.EntityDomain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AdministrativoImperial.Domain.Business
{
    public class ObraBusiness : BusinessBase<Obra>, IObraBusiness
    {
        private readonly IObraRepository _obraRepository;

        public ObraBusiness(IObraRepository obraRepository) : base(obraRepository)
        {
            _obraRepository = obraRepository;
        }

        //public async Task<ResultResponseModel> Cadastrar(Funcionario funcioanrio)
        //{
        //    try
        //    {
        //        var idCadastrado = await _obraRepository.CreateAsync(funcioanrio);
        //        if (idCadastrado > 0)
        //            return new ResultResponseModel(false, "Funcionário cadastrado com sucesso!");
        //        else
        //            return new ResultResponseModel(true, "Erro ao cadastrar Funcionário. Tente novamente!");
        //    }
        //    catch(Exception e)
        //    {
        //        return new ResultResponseModel(true, "Erro ao cadastrar Funcionário. Entre em contato com o Administrador.");
        //    }
        //}

        //public async Task<IEnumerable<Funcionario>> ObterCadastrados()
        //    => await _funcionarioRepository.ObterCadastrados();
    }
}
