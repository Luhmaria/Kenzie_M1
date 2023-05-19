//1
let arrayFrutas = [
  "laranja",
  "abacaxi",
  "acerola",
  "morango",
  "uva",
  "melancia",
];

function vowelsCount(lista) {
  let resultado = [];

  for (positionArr = 0; positionArr < lista.length; positionArr++) {
    let tamanhoString = lista[positionArr].length;
    let vogais = 0;

    for (positionStr = 0; positionStr < tamanhoString; positionStr++) {
      if (lista[positionArr][positionStr] == "a") {
        vogais++;
      } else if (lista[positionArr][positionStr] == "e") {
        vogais++;
      } else if (lista[positionArr][positionStr] == "i") {
        vogais++;
      } else if (lista[positionArr][positionStr] == "o") {
        vogais++;
      } else if (lista[positionArr][positionStr] == "u") {
        vogais++;
      }
    }
    resultado.push(vogais);
  }
  return resultado;
}
console.log(vowelsCount(arrayFrutas));

//2
function stringTripletGroup(frase) {
  let resultado = [];
  let tresCaracteres = "";
  for (position = 0; position < frase.length; position++) {
    tresCaracteres += frase[position];
    if (tresCaracteres.length == 3) {
      resultado.push(tresCaracteres);
      tresCaracteres = "";
    }
  }
  if (tresCaracteres.length != 0) {
    for (i = tresCaracteres.length; i < 3; i++) {
      tresCaracteres += " ";
    }
    resultado.push(tresCaracteres);
    tresCaracteres = "";
  }
  return resultado;
}
console.log(stringTripletGroup("Os três mosqueteiros"));

//3
function dominantPet(listaPets) {
  let contagemDogs = 0;
  let contagemCats = 0;
  let resultado = "";

  for (position = 0; position < listaPets.length; position++) {
    if (listaPets[position].toLowerCase() == "cat") {
      contagemCats++;
    } else if (listaPets[position].toLowerCase() == "dog") {
      contagemDogs++;
    }
  }

  if (contagemCats > contagemDogs) {
    resultado = "CAT!";
  } else if (contagemCats < contagemDogs) {
    resultado = "DOG!";
  } else {
    resultado = "DRAW!";
  }
  return resultado;
}
console.log(dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]));
console.log(
  dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"])
);

//4
function divisibleList(lista, numero) {
  let resultado = [];
  for (position = 0; position < lista.length; position++) {
    if (lista[position] % numero == 0) {
      resultado.push(lista[position]);
    }
  }
  return resultado;
}
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));

//5
function trustMeOrNot(bool, numero) {
  let resultado = [];
  for (arr = 0; arr < numero; arr++) {
    resultado.push(bool);
  }
  return resultado;
}
console.log(trustMeOrNot(true, 8));

//6
function changeLampStatus(lista) {
  let resultado = [];
  let inverso;
  for (position = 0; position < lista.length; position++) {
    inverso = !lista[position];
    resultado.push(inverso);
  }
  return resultado;
}
console.log(changeLampStatus([false, false, true, false, true, true, true]));

//7
function averageGrade(listaNotas) {
  let resultado = "";
  let quantidadeNotas = listaNotas.length;
  let somaNotas = 0;
  let mediaNotas;
  for (position = 0; position < listaNotas.length; position++) {
    somaNotas += listaNotas[position];
  }
  mediaNotas = somaNotas / quantidadeNotas;
  resultado = `A médias das notas é: ${mediaNotas.toFixed(2)}`;
  return resultado;
}
console.log(averageGrade([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]));

//8
function canvasDeliveriesPercentage(listaNotas) {
  let resultado = "";
  let porcentagemEntregas = 0;
  let maxPontos = listaNotas.length * 10;
  let pontosAtingidos = 0;
  for (position = 0; position < listaNotas.length; position++) {
    pontosAtingidos += listaNotas[position];
  }
  porcentagemEntregas = (pontosAtingidos / maxPontos) * 100;
  resultado = `A porcentagem total de entregas atingida é: ${porcentagemEntregas.toFixed(
    2
  )}%`;
  return resultado;
}
console.log(
  canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7])
);
