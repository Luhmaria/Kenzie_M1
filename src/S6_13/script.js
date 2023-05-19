let itens = [
  {
    image: "assets/img/actions/animewoman.jpg",
    name: "Anime Woman",
    price: "R$75",
    type: "actionFigure",
  },
  {
    image: "assets/img/actions/dragonballpersonagem.jpg",
    name: "Goku",
    price: "R$90",
    type: "actionFigure",
  },
  {
    image: "assets/img/actions/starwarspersonagem.jpg",
    name: "Yoda",
    price: "R$80",
    type: "actionFigure",
  },
  {
    image: "assets/img/painting/clock.jpg",
    name: "Relógio",
    price: "R$50",
    type: "painting",
  },
  {
    image: "assets/img/painting/gamepad.jpg",
    name: "GamePad",
    price: "R$55",
    type: "painting",
  },
  {
    image: "assets/img/painting/personagem.jpg",
    name: "Robot",
    price: "R$75",
    type: "painting",
  },
];

let listFigures = [];
let listPaintings = [];

function separateItens(itens) {
  for (let i = 0; i < itens.length; i++) {
    if (itens[i].type == "painting") {
      listPaintings.push(itens[i]);
    } else {
      listFigures.push(itens[i]);
    }
  }
}
separateItens(itens);

const secaoPinturas = document.querySelector(".pinturas");
const secaoFiguras = document.querySelector(".figuras");

function adicionaCards(lista, secao) {
  for (let j = 0; j < lista.length; j++) {
    let produto = lista[j];

    let newcard = document.createElement("ul");
    newcard.setAttribute("class", "card_produto");

    let fotoProduto = document.createElement("li");
    fotoProduto.setAttribute("class", "foto_produto");

    let imgProduto = document.createElement("img");
    imgProduto.src = produto.image;
    imgProduto.alt = produto.name;

    let tituloProduto = document.createElement("li");
    tituloProduto.setAttribute("class", "titulo_produto");
    tituloProduto.innerText = produto.name;

    let precoProduto = document.createElement("li");
    precoProduto.setAttribute("class", "descricao_produto");
    precoProduto.innerText = produto.price;

    newcard.appendChild(fotoProduto);
    fotoProduto.appendChild(imgProduto);
    newcard.appendChild(tituloProduto);
    newcard.appendChild(precoProduto);
    secao.appendChild(newcard);
  }
}
adicionaCards(listPaintings, secaoPinturas);
adicionaCards(listFigures, secaoFiguras);
