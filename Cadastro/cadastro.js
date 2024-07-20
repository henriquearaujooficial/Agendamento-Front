document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const cpf = document.getElementById('cpf').value;
      const endereco = document.getElementById('endereco').value;
      const cidade = document.getElementById('cidade').value;
      const estado = document.getElementById('estado').value;
      const deficiencias = Array.from(document.getElementById('deficiencias').selectedOptions).map(option => option.value);
      const voto = document.getElementById('voto').value;
  
      if (nome && cpf && endereco && cidade && estado && deficiencias.length > 0 && voto) {
        alert('Cadastro enviado com sucesso!');
        form.reset();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  });
  