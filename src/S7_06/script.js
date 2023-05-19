let tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "urgente",
  },
  {
    titulo: "Limpar o quarto",
    tipo: "urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "prioritário",
  },
  {
    titulo: "Guardar dinheiro do lanche",
    tipo: "urgente",
  },
  {
    titulo: "Beber água",
    tipo: "prioritário",
  },
];

let urgente = [];
let prioritário = [];
let normal = [];
let filtroPesquisa = [];

const insert = document.querySelector("#insert");
const textoNovaTarefa = document.querySelector("#novaTarefa");
const categoriaNovaTarefa = document.querySelector("#categoria");
const lista = document.querySelector(".tasks_container");
const pesquisa = document.querySelector("#search");
const textoPesquisa = document.querySelector("#pesquisa");
const cabecalho = document.querySelector("header");
const refresh = document.querySelector("#refres");

pesquisa.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < tasks.length; i++) {
    if (textoPesquisa.value.toLowerCase() == tasks[i].titulo.toLowerCase()) {
      filtroPesquisa.push(tasks[i]);
    }
  }
  lista.innerHTML = "";
  criaCardTask(filtroPesquisa);
  filtroPesquisa = [];
  let refresh = document.createElement("button");
  refresh.setAttribute("id", "refresh");
  refresh.innerHTML = "Refresh";
  cabecalho.appendChild(refresh);
  refresh.addEventListener("click", function (e) {
    reloadList();
    refresh.remove(refresh);
  });
});

insert.addEventListener("click", function (e) {
  e.preventDefault();
  let novaTask = {
    titulo: "",
    tipo: "",
  };
  novaTask.titulo = textoNovaTarefa.value;
  novaTask.tipo = categoriaNovaTarefa.value;
  tasks.push(novaTask);
  reloadList();
});

function separaTasks(listaTasks) {
  for (let i = 0; i < listaTasks.length; i++) {
    if (listaTasks[i].tipo == "urgente") {
      urgente.push(listaTasks[i]);
    } else if (listaTasks[i] == "prioritário") {
      prioritário.push(listaTasks[i]);
    } else {
      normal.push(listaTasks[i]);
    }
  }
}

function criaCardTask(listaTasks) {
  for (let i = 0; i < listaTasks.length; i++) {
    let item = document.createElement("li");
    let remove = document.createElement("button");
    remove.setAttribute("id", listaTasks[i].titulo);
    remove.innerHTML = "remove";
    remove.addEventListener("click", function (e) {
      tasks = tasks.filter((x) => x.titulo !== remove.id);
      reloadList();
    });
    item.classList.add("task");
    item.innerText = listaTasks[i].titulo;
    item.appendChild(remove);
    lista.appendChild(item);
  }
}

function reloadList() {
  urgente = [];
  prioritário = [];
  normal = [];
  lista.innerHTML = "";
  separaTasks(tasks);
  criaCardTask(urgente);
  criaCardTask(prioritário);
  criaCardTask(normal);
}

reloadList();
