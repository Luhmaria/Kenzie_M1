
const shoppingList = document.getElementById("list");
const input = document.getElementById("input");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");


let list = [];

function reloadList() {
    shoppingList.innerHTML = ""; // Limpa nosso Elemento HTML
    for (let index = 0; index < list.length; index++) {
      let currentElement = list[index];
      let currentbutton = currentElement.querySelector("button")
      currentbutton.id = index;
      currentElement.id = index;
      shoppingList.appendChild(currentElement);
    }
  }
  function createRemoveButton() {
    const removeButton = document.createElement("button"); // Criamos um botão
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", (e) => {
      let id = e.currentTarget.id;
      list = list.filter(filtro => filtro.id !== (id));
      console.log(list)
      console.log(id)
      reloadList(); // Chamamos a função para recarregar a lista.
    });
    return removeButton;
    }
    function onClickFunction() {
        let newItem = document.createElement("li");   //Criando um elemento html "li"
        let paragraph = document.createElement("p");  //Criando um elemento html "p"
        let removeButton = createRemoveButton();
      
                
        if (input.value) {
        paragraph.innerText = input.value; // Adicionamos o valor do input em nosso "p"
      
        newItem.appendChild(paragraph); // Colocamos nosso paragraph dentro de nossa li
        newItem.appendChild(removeButton);// Colocamos nosso button dentro de nossa li
      
        input.value = ""; // Limpamos nosso input
        list.push(newItem);
      
        reloadList();
        }
      }

      addButton.addEventListener("click", onClickFunction);

      function onClickResetFunction() {
        shoppingList.innerHTML = "";
        list = [];
      }
      resetButton.addEventListener("click", onClickResetFunction);