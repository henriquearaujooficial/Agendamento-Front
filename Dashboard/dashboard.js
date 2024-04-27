let menuItem = document.querySelectorAll(".item-menu");

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

menuItem.forEach((item) => item.addEventListener("click", selectLink));

let btnExp = document.querySelector("#btn-exp");
let menu = document.querySelector(".menu-lateral");

btnExp.addEventListener("click", () => {
  menu.classList.toggle("expandir");
});

//Sessão Home
let btnHome = document.querySelector("#selectHome");
btnHome.addEventListener("click", () => {
  let displayHome = document.getElementById("home").style.display;
  if (displayHome === "none") {
    document.getElementById("home").style.display = "flex";
  }

  obterUsuarios();

  let variHome = document.getElementById("home").style.display;
  if (variHome === "flex") {
    document.getElementById("perfil").style.display = "none";
    document.getElementById("agenda").style.display = "none";
    document.getElementById("grafico").style.display = "none";
  }
});

function logout() {
  window.location.href = "../index.html";
}

//--------------------------------GET
function obterUsuarios() {
  const url = "http://localhost:8080/usuarios";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Usuários:", data);
      createCards(data);
    })
    .catch((error) => {
      console.error("Erro ao obter usuários:", error);
    });
}

function createCards(data) {
  const cardContainer = document.getElementById("containerHome");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const nameHeader = document.createElement("h3");
    nameHeader.innerHTML = item.nome;
    card.appendChild(nameHeader);

    const infoParagraphs = document.createElement("div");
    infoParagraphs.className = "info-paragraphs";
    infoParagraphs.innerHTML = `
            <p>Email: ${item.email}</p>
            <p>Telefone: ${item.telefone}</p>
            <p>Data: ${item.data}</p>
            <p>Horário: ${item.horario}</p>
            <p>Tipo de Serviço: ${item.tipoServico}</p>
        `;
    card.appendChild(infoParagraphs);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const acceptButton = document.createElement("button");
    acceptButton.innerText = "Aceitar";
    acceptButton.className = "accept-button";
    acceptButton.addEventListener("click", () => {
      acceptCard(card);
    });
    buttonsDiv.appendChild(acceptButton);

    const rejectButton = document.createElement("button");
    rejectButton.innerText = "Recusar";
    rejectButton.className = "reject-button";
    rejectButton.addEventListener("click", () => {
      rejectCard(card);
    });
    buttonsDiv.appendChild(rejectButton);

    card.appendChild(buttonsDiv);

    cardContainer.appendChild(card);
  });
}

function rejectCard(card, user) {
  card.classList.add("rejected-card");
  setTimeout(() => {
    card.style.display = "none";
  }, 500);
}

function acceptCard(card) {
  card.classList.add("accepted-card");
  const buttons = card.querySelectorAll("button");
  buttons.forEach((button) => {
    button.style.display = "none";
  });
}
