//1
let numberOne = parseInt(prompt("Digite um número inteiro"));
let numbertwo = parseInt(prompt("Digite um número inteiro"));
if (numberOne > numbertwo) {
  alert(
    `O maior número é ${numberOne} e a diferença é ${numberOne - numbertwo}`
  );
} else if (numberOne < numbertwo) {
  alert(
    `O maior número é ${numbertwo} e a diferença é ${numbertwo - numberOne}`
  );
} else if (numberOne == numbertwo) {
  alert("Os números são iguais :D");
}

//2
let firstNumber = parseFloat(prompt("Digite o primeiro número"));
let secondNumber = parseFloat(prompt("Digite o segundo número"));
if (firstNumber > secondNumber) {
  alert(
    `O número ${firstNumber.toFixed(1)} é maior que ${secondNumber.toFixed(1)}`
  );
} else if (firstNumber < secondNumber) {
  alert(
    `O número ${secondNumber.toFixed(1)} é maior que ${firstNumber.toFixed(1)}`
  );
} else if (firstNumber == secondNumber) {
  alert("Os números são iguais.");
}

//3
let valorSalario = parseFloat(prompt("Digite o valor do salário"));
let valorEmprestimo = parseFloat(
  prompt("Digite o valor da prestação do empréstimo")
);
let limiteEmprestimo = 0.3 * valorSalario;
if (valorEmprestimo > limiteEmprestimo) {
  console.log("Empréstimo não concedido");
} else {
  console.log("Empréstimo concedido");
}

//4
let numeroRecebido = parseInt(prompt("Digite um número inteiro"));
let divisivelPor3 = numeroRecebido % 3; //sendo divisivel será 0 - false
let divisivelPor5 = numeroRecebido % 5;
let numeroImpar = numeroRecebido % 2; // é par quando 0 (false)

if (divisivelPor3 == 0 && divisivelPor5 == 0) {
  alert("Valor inválido.");
} else if (divisivelPor3 == 0) {
  alert("Valor divisível por 3.");
} else if (divisivelPor5 == 0) {
  alert("Valor divisível por 5.");
} else if (numeroImpar == true) {
  alert("O número é impar.");
} else if (numeroImpar == false) {
  alert("O número é par.");
}

//5
let numeroSemana = parseInt(prompt("Digite um número inteiro de 1-7"));

if (numeroSemana == 1) {
  alert("Domingo");
} else if (numeroSemana == 2) {
  alert("Segunda-Feira");
} else if (numeroSemana == 3) {
  alert("Terça-Feira");
} else if (numeroSemana == 4) {
  alert("Quarta-Feira");
} else if (numeroSemana == 5) {
  alert("Quinta-Feira");
} else if (numeroSemana == 6) {
  alert("Sexta-Feira");
} else if (numeroSemana == 7) {
  alert("Sábado");
} else {
  alert("Erro. Digitação não corresponde a nenhum dia da semana");
}

//6
let salarioAtual = parseFloat(
  prompt("Digite o valor do salário do funcionário")
);
let valorReajuste = parseFloat(
  prompt("Digite a porcentagem de reajuste do salário")
);
let salarioReajustado = salarioAtual * (valorReajuste / 100) + salarioAtual;
if (valorReajuste <= 5) {
  alert(`O salário corrigido do funcionário é de: R$${salarioReajustado}`);
} else {
  alert("Porcentagem de reajuste inválida");
}

//7
let valorEmDolar = parseFloat(prompt("Digite o valor em dolar(es) ($)"));
let cotacaoDolar = parseFloat(prompt("Digite a cotação do dolar (R$)"));
let valorConvertido = valorEmDolar * cotacaoDolar;
alert(
  `$${valorEmDolar.toFixed(2)} é equivalente a R$${valorConvertido.toFixed(
    2
  )}, tendo R$${cotacaoDolar.toFixed(2)} como cotação`
);

//8
let tipoPulverizacao = parseInt(
  prompt("Digite o tipo de pulverização (de 1-4)")
);
let areaPulverizada = parseFloat(
  prompt("Digite a área a ser pulverizada (em acres)")
);
let orcamento;
let ultrapassado;

if (tipoPulverizacao < 1 || tipoPulverizacao > 4) {
  alert("Tipo de pulverização inválido");
} else if (tipoPulverizacao == 1) {
  orcamento = 50 * areaPulverizada;
} else if (tipoPulverizacao == 2) {
  orcamento = 100 * areaPulverizada;
} else if (tipoPulverizacao == 3) {
  orcamento = 150 * areaPulverizada;
} else if (tipoPulverizacao == 4) {
  orcamento = 250 * areaPulverizada;
}

if (areaPulverizada > 1000) {
  orcamento = orcamento - orcamento * 0.05;
}
if (orcamento > 750) {
  ultrapassado = orcamento - 750;
  orcamento = 750 + (ultrapassado - ultrapassado * 0.1);
}

alert(`O valor a ser pago é de R$${orcamento}`);

//9
let tempo = parseFloat(prompt("Digite as horas de viagem"));
let velocidade = parseFloat(prompt("Digite a velocidade média da viagem"));
let distanciaPercorrida = tempo * velocidade;
let litrosConsumidos = distanciaPercorrida / 12;
alert(
  `Seu veículo percorreu ${distanciaPercorrida}km a ${velocidade}km/h em ${tempo}h de viagem e consumiu ${litrosConsumidos.toFixed(
    2
  )}l de gasolina.`
);

//10
let valorOriginalFatura = parseFloat(prompt("Digite o valor da fatura"));
let taxaAtraso = parseFloat(prompt("Digite a taxa de atraso por dia"));
let tempoAtraso = parseFloat(prompt("Digite quantos dias de atraso"));
let valorCorrigido =
  valorOriginalFatura + valorOriginalFatura * (taxaAtraso / 100) * tempoAtraso;
if (tempoAtraso % 1 != 0) {
  alert("Valor inválido. O tempo de atraso deve ser em dias.");
} else {
  alert(`O valor atual da fatura está em R$${valorCorrigido.toFixed(2)}`);
}
