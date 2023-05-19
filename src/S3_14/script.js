// 1
let litroGasolina = 6.8;
let dinheiro = parseFloat(
  prompt("Quanto em dinheiro você deseja comprar de gasolina?")
);
alert(`O cliente abasteceu ${dinheiro / litroGasolina}l`);

//2;
let temperaturaCelsius = parseFloat(
  prompt("Digite a temperatura em graus Celsius")
);
let temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5;
alert(
  `O valor ${temperaturaCelsius}ºC em Fahrenheit  é ${temperaturaFahrenheit}.`
);

//3;
let tempFahrenheit = parseFloat(
  prompt("Digite a temperatura em graus Fahrenheit")
);
let tempCelsius = ((tempFahrenheit - 32) * 5) / 9;
alert(`O valor ${tempFahrenheit}ºf em Celsius é ${tempCelsius}ºC.`);

//4;
let comprimentoCaixa = parseFloat(prompt("Digite o comprimento da caixa"));
let larguraCaixa = parseFloat(prompt("Digite a largura da caixa"));
let alturaCaixa = parseFloat(prompt("Digite a altura da caixa"));
let volumeCaixa = comprimentoCaixa * larguraCaixa * alturaCaixa;
alert(`O volume da caixa é de ${volumeCaixa}m³.`);

///5;
let numeroInteiro = parseInt(prompt("Digite um número inteiro"));
let numeroquadrado = numeroInteiro ** 2;
alert(`O valor ${numeroInteiro} ao quadrado é ${numeroquadrado}`);

//6;
let nota1 = parseFloat(prompt("Digite a nota 1"));
let nota2 = parseFloat(prompt("Digite a nota 2"));
let nota3 = parseFloat(prompt("Digite a nota 3"));
let nota4 = parseFloat(prompt("Digite a nota 4"));
let nota5 = parseFloat(prompt("Digite a nota 5"));
let somaNotas = nota1 + nota2 + nota3 + nota4 + nota5;
let mediaNotas = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
alert(
  `A soma dos valores informados é: ${somaNotas} e a média das notas é: ${mediaNotas}`
);

//7;
let numero1 = parseInt(
  prompt("Digite um número inteiro positivo que será dividido")
);
let numero2 = parseInt(
  prompt("Digite um número inteiro positivo que será o divisor")
);
let restanteDivisão = numero1 % numero2;
alert(`O resto da divisão de ${numero1} por ${numero2} é: ${restanteDivisão}`);

//8;
let text = prompt("Digite seu texto aqui");
let textSize = texto.length;
alert(`Este texto tem ${textSize} caracteres`);

//9;
let texto = prompt("Digite seu texto aqui");
let primeiraLetra = texto[0];
let tamanhoTexto = texto.length - 1;
let ultimaLetra = texto[tamanhoTexto];
alert(
  `A primeira letra deste texto é ${primeiraLetra.toUpperCase()} e a última é ${ultimaLetra.toLowerCase()}`
);

//10;
let nome = prompt("Digite seu nome");
let sobrenome = prompt("Digite seu sobrenome");
let idade = prompt("Digite sua idade");
let setor = prompt("Digite seu setor");
alert(
  `Nome: ${nome.toUpperCase()} ${sobrenome.toUpperCase()} - Idade: ${idade} - Setor: ${setor}`
);
