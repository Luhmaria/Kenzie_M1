//1
function numberexibition (){
    let number = parseInt(prompt("Digite um número inteiro"))
    console.log(`O número digitado foi ${number}`)
}
//numberexibition();

//2
function soma3 (){
    let numberOne = parseInt(prompt("Digite o 1° número inteiro"))
    let numbertwo = parseInt(prompt("Digite o 2° número inteiro"))
    let numberThree = parseInt(prompt("Digite o 3° número inteiro"))
    let soma = numberOne+numbertwo+numberThree
    console.log(`A soma dos números digitados é ${soma}`)
}
//soma3();

//3
function mediaAnual (){
    let media1 = parseFloat(prompt("Digite a nota do primeiro semestre"))
    let media2 = parseFloat(prompt("Digite a nota do segundo semestre"))
    let mediaAnual = (media1+media2)/12
    console.log(`A média anual foi de ${mediaAnual.toFixed(2)}`)
}
//mediaAnual();

//4
function restoDivisao(a,b){
    let resultado = a%b
    if( resultado == 0){
        console.log("Esta é uma divisão exata")
    }else{
        console.log(`Esta é uma divisão inexata e o resto é ${resultado}`)
    }
}
//restoDivisao(10,2)

//5
function quadradoNumero(a){
    console.log(`O quadrado de ${a} é ${a*a}`)
}
//quadradoNumero(5)

//6
function mediaPonderada (nota1,nota2,nota3,nota4,peso1,peso2,peso3,peso4){
 let mediaPonderada = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3)+(nota4*peso4))/(peso1+peso2+peso3+peso4)
 console.log(`A média ponderada é: ${mediaPonderada}`)
}
//mediaPonderada(1,2,3,4,1,2,3,4);

//7
function mediaConcurso(){
    mediaPonderada(7,5,10,8,2,1,1,1)
}
//mediaConcurso()

//8
function reajusteSaldo(saldo){
    console.log(`O novo salário é de ${saldo+=(0.03*saldo)}`)
}
//reajusteSaldo(1100)

//9
function areaTriangulo(base, altura){
    let areaTriangulo = (base*altura)/2
    console.log(`A área do triangulo é ${areaTriangulo}`)
}
areaTriangulo(10,6)