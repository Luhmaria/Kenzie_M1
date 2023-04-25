
let naTela = data;
let noCarrinho = [];

const vitrine = document.querySelector(".lista_vitrine");

function renderizaVitrine(ListaProdutos){
    vitrine.innerHTML="";
    if (ListaProdutos.length == 0){
        let elementoLista = document.createElement("li")
        let semProduto = document.createElement("h2")
        semProduto.innerText = "Nenhum produto encontrado"
        elementoLista.appendChild(semProduto)
        vitrine.appendChild(elementoLista)
    }else{
        for(let i = 0; i < ListaProdutos.length; i++){
        
            let produto = ListaProdutos[i];
            
            let card = document.createElement("li");
            card.classList.add("item_vitrine");
            card.setAttribute("data-categoria", produto.tag[0]);
    
            let fotoProduto = document.createElement("img");
            fotoProduto.src = produto.img;
            fotoProduto.alt = produto.nameItem;
    
            card.appendChild(fotoProduto);
    
            let infoProduto = document.createElement("div");
            infoProduto.classList.add("info_produto");
    
            let categoriaProduto = document.createElement("small");
            categoriaProduto.innerText = produto.tag[0];
    
            let tituloProduto = document.createElement("h2");
            tituloProduto.innerText = produto.nameItem;
    
            let descricaoProduto = document.createElement("p");
            descricaoProduto.innerText = produto.description;
    
            let valorProduto = document.createElement("p");
            valorProduto.classList.add("valor");
            valorProduto.innerText = `R$${produto.value.toFixed(2)}`;
    
            let botaoAdicionar = document.createElement("button");
            botaoAdicionar.setAttribute("data-idproduct", produto.id)
            botaoAdicionar.innerText = produto.addCart;

            botaoAdicionar.addEventListener("click", function(e){
                let total = document.querySelector(".totalizadores")
                let idProduto = e.target.dataset.idproduct
                let presente = noCarrinho.findIndex(x => x.id == idProduto);
                if(presente !== -1){
                    noCarrinho[presente].quantidade++;
                    carrinho.removeChild(total);
                    renderizaCarrinho(noCarrinho);
               }else{
                    if (total !== null){
                        carrinho.removeChild(total);
                    }
                    let produto = data.find(x => x.id == idProduto)
                    produto.quantidade = 1;
                    produto.valueCart = function(){
                        return this.quantidade*this.value
                    }
                    noCarrinho.push(produto);
                    renderizaCarrinho(noCarrinho);
               }
            })
    
            infoProduto.appendChild(categoriaProduto);
            infoProduto.appendChild(tituloProduto);
            infoProduto.appendChild(descricaoProduto);
            infoProduto.appendChild(valorProduto);
            infoProduto.appendChild(botaoAdicionar);
    
            card.appendChild(infoProduto);
    
            vitrine.appendChild(card);
    
        }
    }
    
}
renderizaVitrine(naTela);

const categoriaTodos = document.querySelector("#todos")
const categoriaAcessorios = document.querySelector("#Acessórios")
const categoriaCalcados = document.querySelector("#Calçados")
const categoriaCamisetas = document.querySelector("#Camisetas")
const pesquisa = document.querySelector("#pesquisa")


categoriaTodos.addEventListener("click", function(e){
    naTela = data;
    renderizaVitrine(naTela)
})

categoriaAcessorios.addEventListener("click", function(e){
    naTela = data.filter(x => x.tag[0] == e.target.id);
    renderizaVitrine(naTela)
})

categoriaCalcados.addEventListener("click", function(e){
    naTela = data.filter(x => x.tag[0] == e.target.id);
    renderizaVitrine(naTela)
})

categoriaCamisetas.addEventListener("click", function(e){
    naTela = data.filter(x => x.tag[0] == e.target.id);
    renderizaVitrine(naTela)
})

pesquisa.addEventListener("input", function(e){
    naTela = [];
    for(let i = 0; i < data.length ; i++){
        let produto = data[i];
        if(produto.nameItem.toLowerCase().includes(pesquisa.value.toLowerCase())){
            naTela.push(produto);
        }
    }
    renderizaVitrine(naTela);
})

const carrinho = document.querySelector(".carrinho")
const itensCarrinho = document.querySelector(".lista_carrinho")

function renderizaTotalizadores(listaProdutos){

    let contadorQuantidade = 0;
    let contadorValor = 0;

    for(let i = 0; i< listaProdutos.length; i++){
        produto = listaProdutos[i];
        contadorQuantidade += produto.quantidade;
        contadorValor += produto.valueCart();
    }

    let totalizadores = document.createElement("div");
    totalizadores.classList.add("totalizadores");

    let totalQuantidade = document.createElement("div");
    totalQuantidade.classList.add("total_container");

    let tituloQuantidade = document.createElement("h2");
    tituloQuantidade.innerText = "Quantidade";

    let quantidade = document.createElement("p");
    quantidade.innerText = contadorQuantidade;
    
    let totalValor = document.createElement("div");
    totalValor.classList.add("total_container");

    let tituloValor = document.createElement("h2");
    tituloValor.innerText = "Total";

    let total = document.createElement("p");
    total.innerText = `R$${contadorValor.toFixed(2)}`;

    let limparCarrinho = document.createElement("button")
    limparCarrinho.innerText = "Esvaziar Carrinho"

    limparCarrinho.addEventListener("click", function(e){
        let total = document.querySelector(".totalizadores")
        if (total !== null){
            carrinho.removeChild(total);
        }
        noCarrinho = [];
        renderizaCarrinho(noCarrinho);
    })

    totalQuantidade.appendChild(tituloQuantidade);
    totalQuantidade.appendChild(quantidade);

    totalValor.appendChild(tituloValor);
    totalValor.appendChild(total);

    totalizadores.appendChild(totalQuantidade);
    totalizadores.appendChild(totalValor);
    totalizadores.appendChild(limparCarrinho);

    carrinho.appendChild(totalizadores);
}

function renderizaCarrinho (listaProdutos){

    itensCarrinho.innerHTML = ""; 

    if(listaProdutos.length == 0){
        
        let vazio = document.createElement("div");
        vazio.classList.add("vazio");

        let descricao = document.createElement("h2");
        descricao.innerText = "Carrinho Vazio";

        let instrucao = document.createElement("p");
        instrucao.innerText = "Adicione itens"

        vazio.appendChild(descricao);
        vazio.appendChild(instrucao);

        itensCarrinho.appendChild(vazio);

    }else{
        
        for(let i = 0; i < listaProdutos.length; i++){
            let produto = listaProdutos[i];

            let itemCarrinho = document.createElement("li");
            itemCarrinho.classList.add("item_carrinho");

            let imgProduto = document.createElement("img");
            imgProduto.src = produto.img;
            imgProduto.alt = produto.nameItem;

            let infoProduto = document.createElement("div");
            infoProduto.classList.add("info_carrinho")

            let tituloProduto = document.createElement("h2");
            tituloProduto.innerText = produto.nameItem;

            let valorProduto = document.createElement("p");
            valorProduto.classList.add("valor")
            valorProduto.innerText = `R$${produto.valueCart().toFixed(2)}`

            let quantidadeProduto = document.createElement("p");
            quantidadeProduto.innerText = "Quantidade:"

            let contadorProduto = document.createElement("span")
            contadorProduto.innerText = produto.quantidade;

            quantidadeProduto.appendChild(contadorProduto);

            let botaoRemover = document.createElement("button")
            botaoRemover.setAttribute("data-idproduct", produto.id)
            botaoRemover.innerText = "Remover Produto"
            
            botaoRemover.addEventListener("click", function(e){

                let total = document.querySelector(".totalizadores")

                let idProduto = e.target.dataset.idproduct;

                let indexProduto = noCarrinho.findIndex(x => x.id == idProduto);
                
                if (total !== null){
                    carrinho.removeChild(total);
                }
                if(noCarrinho[indexProduto].quantidade == 1){
                    noCarrinho.splice(indexProduto,1)
                    renderizaCarrinho(noCarrinho);
                }else{
                    noCarrinho[indexProduto].quantidade--;
                    renderizaCarrinho(noCarrinho);
                }

                
            })

            infoProduto.appendChild(tituloProduto);
            infoProduto.appendChild(valorProduto);
            infoProduto.appendChild(quantidadeProduto);
            infoProduto.appendChild(botaoRemover);

            itemCarrinho.appendChild(imgProduto);
            itemCarrinho.appendChild(infoProduto);
            
            itensCarrinho.appendChild(itemCarrinho);

        }
        renderizaTotalizadores(listaProdutos);
    }
}
renderizaCarrinho(noCarrinho);




