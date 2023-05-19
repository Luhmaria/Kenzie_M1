let escola = {
  nome: "Escola Novo Estudo",
  status: true,
  nivel: "Fundamental",
  nota: 3,
};

function alterarStatus(escola) {
  if (escola.status == true) {
    escola.status = false;
  } else {
    escola.status = true;
  }
  return escola;
}
console.log(alterarStatus(escola));

function alteraNivel(escola, nivel) {
  if (nivel.toLowerCase() == "primário") {
    escola.nivel = "Primário";
    return escola;
  } else if (nivel.toLowerCase() == "fundamental") {
    escola.nivel = "Fundamental";
    return escola;
  } else if (nivel.toLowerCase() == "ensino médio") {
    escola.nivel = "Ensino médio";
    return escola;
  } else {
    return "Valor inválido";
  }
}
console.log(alteraNivel(escola, "pRimário"));
console.log(alteraNivel(escola, "Jardim de Infância"));

function alteraNome(escola, nome) {
  if (typeof nome != typeof "") {
    return "Formato inválido";
  } else {
    escola.nome = nome;
    return escola;
  }
}
console.log(alteraNome(escola, "Nome Teste"));
console.log(alteraNome(escola, 123456));

function classificaEscola(escola, nota) {
  if (nota > 0 && nota <= 5) {
    escola.nota = nota;
    return escola;
  } else {
    return "Valor inválido";
  }
}
console.log(classificaEscola(escola, 5));
console.log(classificaEscola(escola, 2));
console.log(classificaEscola(escola, 8));

function verificaStatus(escola) {
  if (escola.status == true) {
    return "Escola Aberta";
  } else {
    return "Escola fechada";
  }
}
console.log(verificaStatus(escola));

function verificaQualidadeEnsino(escola) {
  if (escola.nota <= 2) {
    return "Esta não é uma boa escola";
  } else if (escola.nota > 2 && escola.nota <= 4) {
    return "Esta é uma boa escola";
  } else if (escola.nota == 5) {
    return "Escola excelente";
  }
}
console.log(verificaQualidadeEnsino(escola));

function converter(mpg) {
  let result = (1.609344 * mpg) / 1.609344;
  console.log((1.609344 * mpg) / 1.609344);
  console.log(result);
  return result.toFixed(2);
}
console.log(converter(10));

function sumOfDifferences(arr) {
  let descendingOrder = [];
  descendingOrder.push(arr[0]);
  for (let position = 1; position < arr.length; position++) {
    if (
      arr[position] < descendingOrder[0] &&
      arr[position] < descendingOrder[position]
    ) {
      descendingOrder.push(arr[position]);
    } else {
      descendingOrder.unshift(arr[position]);
    }
    console.log(descendingOrder);
  }

  let result = 0;
  for (let i = 0; i < descendingOrder.length - 1; i++) {
    result += descendingOrder[i] - descendingOrder[i + 1];
  }
  return result;
}
console.log(sumOfDifferences([-16, -11, -8, 12, -11, -14, 16, 15, -8, -8]));
