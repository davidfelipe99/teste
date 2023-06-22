// estrutura de laço com while

const listadestinos = new Array(
    'sao paulo', 'rio de janeiro', 'parana', 'salvador','pernambuco','bahia'
)
console.log(listadestinos.length)
const detinodesejado = 'bahia'

console.table(listadestinos)
console.log(listadestinos)



let indice = 0
let encontrouodestino = true
/*while (comdição) {
    ação

    indice++
}*/

while(indice<=listadestinos.length){
    if(listadestinos[indice] == detinodesejado ){
        /*console.log('destio encontrado')*/
        encontrouodestino =true
         break
    }

else{
    console.log('destinpo nao encontrado')
    encontrouodestino  = false
    
 
} 
indice ++
}

if(encontrouodestino)(
    console.log('destino encontrado')
)
else(
    console.log('destino nao encontrado')
)

let multiplicador = 7
let contador = 1

while(contador <= 10 ){
    console.log(multiplicador * contador)

    contador ++
}
