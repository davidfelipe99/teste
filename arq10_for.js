// estrutura de laço com foe


const listadestinos = new Array(
    'sao paulo', 'rio de janeiro', 'parana', 'salvador','pernambuco','bahia'
)
console.log(listadestinos.length)
const destinodesejado = 'bahia'

const idade = 17

let destinoencontrado=''

for( let indice = 0; indice < listadestinos.length ; indice ++)
    if (listadestinos[indice] == destinodesejado){
        
        destinoencontrado = true
        break

        
}
else{
   destinoencontrado = false
}
if(idade <= 18 && destinodesejado){
    console.log('viagem autorizada')

}
else{
    console.log('viagem nao autorizada')
}
    




const valor = 2.5
for( let multiplo = 1; multiplo<=10; multiplo ++){
    console.log(valor * multiplo)
}





