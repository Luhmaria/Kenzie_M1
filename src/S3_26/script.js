let nomeAluno = prompt("Digite o nome do aluno")
let notaMatematica = parseInt(prompt("Digite a nota em Matemática"))
let notaPortugues = parseInt(prompt("Digite a nota em Português"))
let notaInformatica = parseInt(prompt("Digite a nota em Informática"))
let notaGeografia = parseInt(prompt("Digite a nota em Geografia"))
let notaIngles = parseInt(prompt("Digite a nota em Inglês"))
let notaHistoria = parseInt(prompt("Digite a nota em História"))
let notaFilosofia = parseInt(prompt("Digite a nota em Filosofia"))
let notaSociolologia = parseInt(prompt("Digite a nota em Sociologia"))
let notaLiteratura = parseInt(prompt("Digite a nota em Literatura"))
let notaEdFisica = parseInt(prompt("Digite a nota em Educação Física"))
let presença = parseInt(prompt("Digite a presença do aluno"))
let somaNota = (notaMatematica+notaPortugues+notaInformatica+notaGeografia+notaIngles+notaHistoria+notaFilosofia+notaSociolologia+notaLiteratura+notaEdFisica)
let mediaNota = (somaNota/10)

if(notaMatematica || notaPortugues || notaInformatica || notaGeografia || notaIngles || notaHistoria || notaFilosofia || notaSociolologia || notaLiteratura ||notaEdFisica == 0){
    alert("valor de nota inválido")
} else if(notaMatematica || notaPortugues || notaInformatica || notaGeografia || notaIngles || notaHistoria || notaFilosofia || notaSociolologia || notaLiteratura ||notaEdFisica > 10){
    alert("valor de nota inválido")
}

if((nomeAluno.length)<5){
    alert("Nome é inválido")
}

if(mediaNota >=8 && presença >=6){
    alert(`A nota do aluno ${nomeAluno} é de ${mediaNota} e sua presença ${presença}: Aluno Aprovado!`)
}else{
    alert(`A nota do aluno ${nomeAluno} é de ${mediaNota} e sua presença ${presença}: Aluno Reprovado!`)
}
