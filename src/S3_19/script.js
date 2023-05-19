let nome = prompt("Digite seu nome");
let idade = parseInt(prompt("Digite sua idade"));
let acompanhado = prompt("Você está acompanhado? Digite s ou n");

if (acompanhado == "s") {
  acompanhado = true;
} else if (acompanhado == "n") {
  acompanhado = false;
} else {
  alert("comando inválido");
}
console.log(acompanhado);

if (idade >= 18 && acompanhado == false) {
  alert(`Entrada permitida para ${nome}: Valor integral`);
} else if (idade >= 18 && acompanhado == true) {
  alert(`Entrada permitida para ${nome}: Conceder desconto`);
} else {
  alert(`Entrada não permitida para ${nome}: Menor de idade`);
}
