const products = [
    {
        id: 1,
        name: "CSS",
        price: 200.00,
        image:"img/css.png"
    },
    {
        id: 2,
        name: "HTML",
        price: 100.00,
        image:"img/html.png"
    },
    {
        id: 3,
        name: "Javascript",
        price: 1000.00,
        image:"img/js.png"
    },
    {
        id: 4,
        name: "Python",
        price: 100.00,
        image:"img/py.png"
    },
    {
        id: 5,
        name: "Object",
        price: 150.00,
        image:"img/obj.png"
    }
]

let somatorio=0;

const body = document.body;

const header = document.createElement("header")

const logo = document.createElement("img")
logo.src = "img/technology.png"
logo.alt = "Logo Computer Files"
header.insertAdjacentElement("afterbegin",logo)

const title = document.createElement("h1")
title.innerText = "Computer Files"
header.insertAdjacentElement("beforeend",title)

body.appendChild(header)

const main = document.createElement("main")

const mainheader = document.createElement("div")
mainheader.classList.add("cartheader")

const cardTitle = document.createElement("h2")
cardTitle.innerText = "Carrinho de Compras"

const legendaItens = document.createElement("div")
legendaItens.classList.add("legenda_itens")

const legendTitle1 = document.createElement("h3")
legendTitle1.innerText = "Item"
legendTitle1.classList.add("title")
const legendTitle2 = document.createElement("h3")
legendTitle2.innerText = "Valor"
legendTitle2.classList.add("title")

legendaItens.insertAdjacentElement("afterbegin",legendTitle1)
legendaItens.insertAdjacentElement("beforeend",legendTitle2)

mainheader.insertAdjacentElement("afterbegin",cardTitle)
mainheader.insertAdjacentElement("beforeend",legendaItens)

main.appendChild(mainheader)
body.appendChild(main)

const ProductList  = document.createElement("ul")
ProductList .classList.add("itens_container")

function insereItens(listaItens){
    for(let i = 0; i < listaItens.length; i++){
    
        let ProductDetails  = document.createElement("li")
        ProductDetails .classList.add("item")
    
        let img = document.createElement("img")
        img.src = listaItens[i].image;
    
        let productName = document.createElement("p")
        productName.innerText = listaItens[i].name
    
        let productPrice = document.createElement("p")
        productPrice.classList.add("productPrice")
        productPrice.innerText = `R$${listaItens[i].price.toFixed(2)}`;
        ProductDetails .appendChild(productPrice)
    
        let divisória = document.createElement("div")
        divisória.classList.add("nomeProduto")
        divisória.appendChild(img)
        divisória.appendChild(productName)
        ProductDetails.insertAdjacentElement("afterbegin",divisória)
    
        ProductList.appendChild(ProductDetails);
    }
    
    main.appendChild(ProductList);
}
insereItens(products);

function soma(listaProdutos){

    let resultado = 0;

    for(let i = 0; i < listaProdutos.length; i++){
        resultado += listaProdutos[i].price
    }
    return resultado;
}

const finalSection = document.createElement("section");
finalSection.classList.add("total_container");

const infoTotal = document.createElement("div");
infoTotal.classList.add("total_info");

const titleTotal = document.createElement("h3");
titleTotal.classList.add("title");
titleTotal.innerText = "Total";

const valorTotal = document.createElement("p");
valorTotal.classList.add("title");
somatorio = soma(products);
valorTotal.innerText = `R$${somatorio.toFixed(2)}`;

infoTotal.appendChild(titleTotal);
infoTotal.appendChild(valorTotal);

const ButtonEnd  = document.createElement("button")
ButtonEnd .classList.add("final")
ButtonEnd .innerText = "Finalizar Compra"

finalSection.appendChild(infoTotal)
finalSection.appendChild(ButtonEnd)
main.appendChild(finalSection)

ButtonEnd.addEventListener("click", function(event){
    alert("Eba! Você finalizou sua compra conosco. Volte sempre :D")
})
