// Função para manipular o envio do formulário
function handleSubmit(event) {
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const dateAsString = String(date);
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;
  const serviceAsString = String(service);

  // Limpar os campos do formulário após o envio
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("service").value = "";

  alert("Agendamento cadastrado, aguarde contato do atendente.");

  cadastrar(name, email, phone, dateAsString, time, serviceAsString);

  window.location.href = "../Landing-page/index.html";
}
// Adicionar um ouvinte de evento para o envio do formulário
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function cadastrar(name, email, phone, dateAsString, time, serviceAsString) {
  fetch("http://localhost:8080/usuarios", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      nome: name,
      email: email,
      telefone: phone,
      data: dateAsString,
      horario: time,
      tipoServico: serviceAsString,
    }),
  });
}
