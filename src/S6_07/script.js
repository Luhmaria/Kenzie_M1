
let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}
let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo: []
  } 
     
//1
function normalizarDados(pessoa){
    let nomeFormatado = pessoa.nome[0].toUpperCase();
    for(let i = 1; i<pessoa.nome.length; i++){
        nomeFormatado += pessoa.nome[i].toLowerCase()
    }
    pessoa.nome = nomeFormatado;
    let usuarioFormatado="";
    for(let j = 0; j<pessoa.nomeDeUsuario.length; j++){
        usuarioFormatado += pessoa.nomeDeUsuario[j].toLowerCase()
    }
    pessoa.nomeDeUsuario = usuarioFormatado;
    return pessoa;
}
console.log(normalizarDados(pessoa));

//2
let listaUsuarios=[];
function criarListaDeUsuarios(pessoa){
    if(2023-pessoa.anoNascimento >= 18){
       listaUsuarios.push(pessoa);
    }
    return listaUsuarios;
}
console.log(criarListaDeUsuarios(pessoa));

//3
function calcularVale(pessoa){
    let valorVale=0;
    let distanciaTrabalho = parseInt(pessoa.distanciaDoTrabalho);
    let valorLitroCombustivel = 6.99;
    if(pessoa.temCarro == true){
        valorVale = ((distanciaTrabalho)*valorLitroCombustivel)*0.7
        if(distanciaTrabalho>100){
            valorVale+=15;
        }
    }
    pessoa.valeCombustivel = `R$${valorVale}`;
    return pessoa.valeCombustivel;
}
console.log(calcularVale(pessoa))

//4
function atualizarEndereco(tipoEndereco, estado){
    endereco.tipo.push(tipoEndereco);
    if(estado.toLowerCase() == "parana"){
        endereco.Estado = "Paraná";
    }
    return endereco;
}
console.log(atualizarEndereco("Casa", "Parana"))

//5
function adicionarEnderecoEmPessoa(pessoa, endereco){
    pessoa.endereco.push(endereco);
    return pessoa;
}
console.log(adicionarEnderecoEmPessoa(pessoa,endereco))
     
       