document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const printButton = document.getElementById('printButton');
    const cepInput = document.getElementById('cep');
    const enderecoInput = document.getElementById('endereco');
    const bairroInput = document.getElementById('bairro');
    const cidadeSelect = document.getElementById('cidade');
  
    const cidadesDF = [
      "Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Planaltina", "Águas Claras", 
      "Gama", "Santa Maria", "Recanto das Emas", "Guará", "Sobradinho", "São Sebastião",
      "Vicente Pires", "Paranoá", "Riacho Fundo", "Núcleo Bandeirante", "Cruzeiro", "Lago Sul",
      "Lago Norte", "Candangolândia", "Sudoeste/Octogonal", "Varjão", "SCIA/Estrutural", "Jardim Botânico"
    ];
  
    // Populando o select de cidades
    cidadesDF.forEach(cidade => {
      const option = document.createElement('option');
      option.value = cidade;
      option.textContent = cidade;
      cidadeSelect.appendChild(option);
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const cpf = document.getElementById('cpf').value;
      const endereco = document.getElementById('endereco').value;
      const cidade = document.getElementById('cidade').value;
      const estado = document.getElementById('estado').value;
      const telefoneResidencial = document.getElementById('telefoneResidencial').value;
      const telefoneCelular = document.getElementById('telefoneCelular').value;
      const bairro = document.getElementById('bairro').value;
      const servicoOferecido = document.getElementById('servicoOferecido').value;
      const foiAtendido = document.querySelector('input[name="foiAtendido"]:checked').value;
      const querSaberPolitica = document.querySelector('input[name="querSaberPolitica"]:checked').value;
      const liderComunitario = document.querySelector('input[name="liderComunitario"]:checked').value;
  
      // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo, uma requisição AJAX
  
      alert('Cadastro enviado com sucesso!');
      form.reset();
    });
  
    printButton.addEventListener('click', function() {
      window.print();
    });
  
    // Preenchimento automático do endereço pelo CEP
    cepInput.addEventListener('blur', function() {
      const cep = cepInput.value.replace(/\D/g, '');
      if (cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (!data.erro) {
              enderecoInput.value = data.logradouro;
              bairroInput.value = data.bairro;
              cidadeSelect.value = data.localidade;
              // Caso o estado seja diferente de DF, ajuste aqui se necessário
              document.getElementById('estado').value = data.uf;
            } else {
              alert('CEP não encontrado.');
            }
          })
          .catch(error => console.error('Erro ao buscar CEP:', error));
      }
    });
  });
  