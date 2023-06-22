// a funçao deve recber uma nota e retornar aprovado para notas maiores ou iguais a 70 e
/* recuperaçao para notas maiores ou iguias a 50 
 ou reprovado para notas menores que 50*/

const  nomeAluno = 'marivaldo'
const notaAluno = 70



function avalianota(nota,nome){
if(nota>=70){
    return `&(nome) aprovado`
}if(nota>=50){
       `$(nome) esta de recuperaçao`
    }
    else{ return `$(nome) reprovado`}
}
//console.log(avalianota (notaAluno,nomeAluno))


const listanomes = new Array(
    'joao',
    'maria',
    'carlos',
    'carla',
    'ricardo'
)
const nomeProcurado = 'carlos'

    
function procuranome(nomes,nome){
    let encontranome=''
    for(let i = 0; i< nomes.length ; i++){
       
        if(nomes[i] == nome){
            encontranome =true
            break
        }
        else(
            encontranome = false
        )
    }


    if(encontranome == true){
        console.log("encontrado!")
    }else{
       
        console.log(" nao encontrado")
    }
}
    procuranome(listanomes,nomeProcurado)


   /* for(contador;criterio;acrecentar){
        if
    }
}*/





//  => imc = peso / (altura*altura)

// exercicio


const meupeso =80
const minhaaltura =1.78

function   calculaimc (peso,altura){
   const imc= peso/ (altura*altura)
    if(imc < 18.5){
        return "baixo peso"
    }
    if(imc< 25){
        return "normal"
    }
    if(imc <30){
        return "sobre peso"
    }
    else{
        return"obeso"
    }
}

console.log (calculaimc(80,1.75))


const n1  =20
const n2 =10

function comparanumero(valor1,valor2){
    if(valor1>valor2){
        return`$(valor1) e maior que (valor2)`
    }
    if(valor1<valor2){
        return `$(valor1) e igual a (valor2)`
    }
    else{
        return `$(valor1) `

    }

}

const Foiaprovado = true


