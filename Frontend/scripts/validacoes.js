// function formatarCPF(input) {
//     let cpf = input.value.replace(/\D/g, '');
//     cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
//     cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
//     cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
//     input.value = cpf;
//   }
  
//   function formatarDataNascimento(input) {
//     let dataN = input.value.replace(/\D/g, '');
//     dataN = dataN.replace(/(\d{2})(\d)/, '$1/$2');
//     dataN = dataN.replace(/(\d{2})(\d)/, '$1/$2');
    
//     input.value = dataN;
//   }
  
//   function formatarRG(input) {
//     let rg = input.value.replace(/\D/g, '');
//     rg = rg.replace(/(\d{2})(\d)/, '$1.$2');
//     rg = rg.replace(/(\d{3})(\d)/, '$1.$2');
//     rg = rg.replace(/(\d{3})([\dX]{1,2})$/, '$1-$2');
    
//     input.value = rg;
//   }
  

// $(document).ready(function() {
//     // Máscara para CPF (999.999.999-99)
//     $('#cpf').inputmask('999.999.999-99');
  
//     // Máscara para data de nascimento (99/99/9999)
//     $('#dataN').inputmask('99/99/9999');
  
//     // Máscara para RG (99.999.999-9)
//     $('#rg').inputmask('99.999.999-9');
//   });

// const dados = requisicao.body;
// const nome = dados.nome;
// const cpf = $('#cpf').inputmask('unmaskedvalue');
// const dataN = $('#dataN').inputmask('unmaskedvalue');
// const email = dados.email;
// const rg = $('#rg').inputmask('unmaskedvalue');
// const opcao = dados.opcao;


// const cpf = document.getElementById("cpf").value.replace(/\D/g, '');
// const dataNascimento = document.getElementById("dataNascimento").value.replace(/\D/g, '');
// const rg = document.getElementById("rg").value.replace(/\D/g, '');