using AdministrativoImperial.Data;
using Microsoft.Extensions.DependencyInjection;

namespace AdministrativoImperial.CrossCutting.DependencyGroups
{
    public class DataDependencyInjection
    {
        public static void Register(IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<SqlDataContext, SqlDataContext>();
            //serviceCollection.AddTransient<IFuncionarioArquivoRepository, FuncionarioArquivoRepository>();
        }
    }
}
