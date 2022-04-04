using AdministrativoImperial.Domain.IBusiness.Migration;
using AdministrativoImperial.Migration;
using Microsoft.Extensions.DependencyInjection;

namespace AdministrativoImperial.CrossCutting.DependencyGroups
{
    public class DomainDependencyInjection
    {
        public static void Register(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IMigrationBusiness, MigrationBusiness>();

            //serviceCollection.AddTransient<IFuncionarioArquivoBusiness, FuncionarioArquivoBusiness>();
        }
    }
}
