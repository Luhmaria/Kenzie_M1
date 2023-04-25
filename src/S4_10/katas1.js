//1
function cubo10(){
    let resultado ="";
    for(let number=1; number<=10; number++){
        resultado+=(` ${number}³= ${number**3} /`)
    }
    return resultado;
}
console.log(cubo10());

//2
function divisiveisPor(limite,divisor){
    let resultado ="";
    for(let number=1; number<=limite; number++){
        if(number%divisor==0){
            resultado +=(` ${number} /`);
        }
    }
    return resultado;
}
console.log(divisiveisPor(100,10))

//3
function posicaoLetra(palavra,numero){
    let resultado ="";
    for(let position=0; (position<palavra.length); position++){
        if(position==numero){
            resultado=(` A letra na posição ${numero} é ${palavra[position]}`);
        }
    }
    return resultado;
}
console.log(posicaoLetra('algoritmos',7));

//4
function palavraRecortada(palavra,numero){
    let resultado ="";
    for(let position=0; (position<numero); position++){
        resultado += (palavra[position]);
    }
    return resultado;
}
console.log(palavraRecortada("Algoritmos", 4));

//5
function palavraResto(palavra,numero){
    let resultado ="";
    for(let position=numero; (position<palavra.length); position++){
        resultado += (palavra[position]);
    }
    return resultado;
}
console.log(palavraResto("Algoritmos", 2));

//6
function contaVogais(palavra) {
    let contagemVogais=0;
    let resultado ="";
    for(let position=0; (position<palavra.length); position++){
       if(palavra[position] == "a"){
        contagemVogais++
       }else if(palavra[position] == "e"){
        contagemVogais++
       }else if(palavra[position] == "i"){
        contagemVogais++
       }else if(palavra[position] == "o"){
        contagemVogais++
        }else if(palavra[position] == "u"){
        contagemVogais++
        }
    }
    resultado = (`O número de vogais na palavra ${palavra} é ${contagemVogais}`)
    return resultado;
}
console.log(contaVogais("abacaxi"))

//7
function textoDeTrasParaFrente(texto){
    let tamanhoTexto = (texto.length);
    let resultado ="";

    for(let position=tamanhoTexto; position>0 ; position--){
        resultado+=(texto[position-1])
    }
    return resultado;
}
console.log(textoDeTrasParaFrente("abacaxi"))

//8
function removeEspacos(texto){
    let resultado ="";
    for(let position=0; (position<texto.length); position++){
        if(texto[position]!=" "){
            resultado+=(texto[position]) 
        }
    }
    return resultado;
}
console.log(removeEspacos("Não restará   espaços em branco"));

//9
function textoCriptografado(texto){
    let resultado ="";
    texto = texto.toLowerCase();
    for(let position=0; (position<texto.length); position++){
        if(texto[position]=="a"){
            resultado+=("x")
            //console.log("x")
        }else if(texto[position]=="e"){
            //console.log("y")
            resultado+=("y")
        }else if(texto[position]=="i"){
            //console.log("w")
            resultado+=("w")
        }else if(texto[position]=="o"){
            //console.log("k")
            resultado+=("k")
        }else if(texto[position]=="u"){
            //console.log("z")
            resultado+=("z")
        }else{
            resultado+=(texto[position])
            //console.log(texto[position])
        }
    }
    return resultado;
}
console.log(textoCriptografado("Uma frase ultra secreta que precisa ser criptografada"))