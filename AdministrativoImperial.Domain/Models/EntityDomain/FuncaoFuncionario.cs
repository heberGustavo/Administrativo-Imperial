using System;
using System.ComponentModel.DataAnnotations;

namespace AdministrativoImperial.Domain.Models.EntityDomain
{
    public class FuncaoFuncionario
    {
        public int id_funcao_funcionario { get; set; }

        [Required(ErrorMessage = "Preencha o campo nome")]
        [StringLength(40, MinimumLength = 3, ErrorMessage = "O título precisa ter entre 3 e 40 caracteres")]
        [Display(Name = "Nome")]
        public string nome { get; set; }
        public bool excluido { get; set; }
    }
}
