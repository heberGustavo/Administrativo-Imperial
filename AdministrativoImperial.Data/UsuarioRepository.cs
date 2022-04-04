using AdministrativoImperial.Data.EntityData;
using AdministrativoImperial.Domain;
using AdministrativoImperial.Domain.IRepository;
using AutoMapper;

namespace AdministrativoImperial.Data.Repository
{
    public class RepositoryBase : RepositoryBase<Usuario, UsuarioData>, IUsuarioRepository
    {
        public RepositoryBase(SqlDataContext dataContext, IMapper mapper) : base(dataContext, mapper)
        {
        }
    }
}
