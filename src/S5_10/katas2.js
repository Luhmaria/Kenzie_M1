function add(numero1, numero2) {
  let resultadoSoma = numero1 + numero2;
  return resultadoSoma;
}
console.log(add(2, 4));

function multiply(multiplicado, multiplicador) {
  let resultadoMultiplicação = 0;

  for (numeroSomas = 0; numeroSomas < multiplicador; numeroSomas++) {
    resultadoMultiplicação = add(resultadoMultiplicação, multiplicado);
  }
  return resultadoMultiplicação;
}
console.log(multiply(6, 8));

function power(x, n) {
  let resultadoPotencia = x;
  if (n != 1) {
    for (
      numeroMultiplicacoes = 0;
      numeroMultiplicacoes < n - 1;
      numeroMultiplicacoes++
    ) {
      resultadoPotencia = multiply(resultadoPotencia, x);
    }
  }
  return resultadoPotencia;
}
console.log(power(2, 8));

function factorial(numero) {
  let resultado = numero;

  for (multiplicador = numero - 1; multiplicador > 1; multiplicador--) {
    resultado = multiply(resultado, multiplicador);
  }
  return resultado;
}
console.log(factorial(4));
