// const formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   logar();
// });

// function logar() {
//   const email = document.getElementById("email");
//   const senha = document.getElementById("senha");

//   const emailDigitado = email.value;
//   const senhaDigitada = senha.value;

//   if (emailDigitado === "" && senhaDigitada === "") {
//     window.location.href = "../Dashboard/dashboard.html";
//   } else {
//     alert("Usuario ou senha estão incorreto, tente novamente!");
//   }
// }

// const botao = document.getElementById("entrar");
// botao.addEventListener("click", logar);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  logar();
});

function logar() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const emailDigitado = email.value;
  const senhaDigitada = senha.value;

  // Remova a condição que verifica se os campos estão vazios
  // if (emailDigitado === "" && senhaDigitada === "") {
  window.location.href = "../Dashboard/dashboard.html";
  // } else {
  //   alert("Usuario ou senha estão incorreto, tente novamente!");
  // }
}

const botao = document.getElementById("entrar");
botao.addEventListener("click", logar);
