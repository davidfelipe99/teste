// declaraçao e execuçao de funçoes

//declarar funçao
/*function nomefuncao(parametros){
    açao da funçao

    retorno
}*/


//executar funçao declarada
// nome funçao (parametro)


function EscreveTexto(texto){
    console.log(texto)
}
EscreveTexto('olá mundo')

function soma(){
    return 5+3
}
//EscreveTexto(soma())

function soma2(n1,n2){
    return n1 + n2
}

//EscreveTexto(soma2(9,5))

function divisao(n1,n2){
    return n1 / n2
}
//EscreveTexto(divisao(9,3))
EscreveTexto(divisao(3,9).toFixed(2))