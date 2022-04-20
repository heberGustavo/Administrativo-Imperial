using AdministrativoImperial.Data.EntityData;
using AdministrativoImperial.Domain.IRepository;
using AdministrativoImperial.Domain.Models.EntityDomain;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdministrativoImperial.Data.Repository
{
    public class FuncionarioRepository : RepositoryBase<Funcionario, FuncionarioData>, IFuncionarioRepository
    {
        public FuncionarioRepository(SqlDataContext dataContext, IMapper mapper) : base(dataContext, mapper)
        {
        }
    }
}
