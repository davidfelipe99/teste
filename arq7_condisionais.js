// estruturas condicionais com operador logico


const nota = 70
const faltas = 2
const quantidadedeaulascurso = 10

// para ser aprovado a nota deve ser maior ou igual a 50 e faltas menor ou igual a 25% do total de aulas//

// sem operador e


if(nota >=50 ){
    if(faltas >= 0.25 * quantidadedeaulascurso){
        console.log('aprovado')
    }
    else(
        console.log('reprovado por faltas')
    )
}
else(
    console.log('reprovado por nota')
)

//com operador e

if(nota >=50 && faltas <=0.25 * quantidadedeaulascurso){
    console.log('esta aprovado')
}else{
    console.log('esta reprovado')
}

