const users = [
  {
    name: "Madalena",
    profile: "Admin",
    sector: "Administration",
  },
  {
    name: "Rafael",
    profile: "user",
    sector: "Finance",
  },
  {
    name: "Baltazar",
    profile: "user",
    sector: "Reception",
  },
  {
    name: "Carmen",
    profile: "Admin",
    sector: "Business",
  },
];

const lista = document.querySelector("ul");

function criaUsers(listaUsers) {
  for (let i = 0; i < listaUsers.length; i++) {
    let item = document.createElement("li");
    let infoNome = document.createElement("span");
    let infoPerfil = document.createElement("span");
    let infoSetor = document.createElement("span");
    if (
      listaUsers[i].profile == "Admin" &&
      listaUsers[i].sector == "Administration"
    ) {
      item.classList.add("master");
    } else if (listaUsers[i].profile == "user") {
      item.classList.add("user");
    } else {
      item.classList.add("admin");
    }
    infoNome.innerText = listaUsers[i].name;
    infoPerfil.innerText = listaUsers[i].profile;
    infoSetor.innerText = listaUsers[i].sector;
    item.appendChild(infoNome);
    item.appendChild(infoPerfil);
    item.appendChild(infoSetor);
    lista.appendChild(item);
  }
}
criaUsers(users);
