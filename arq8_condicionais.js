//estruturas condicionais com operador logigo
/*para que a pessoa pssa viajar sozinha ela deve ser maisr de idade ou estar acompanhada cde um responsavel*/

const idade = 18
const acompanhado = false
const habilitado = false

if(idade >=18 || acompanhado == true ){
    console.log('autorizado')
}
else{
    console.log(' nao esta autorizado') 

}
 
if( idade >= 18 && habilitado){
    console.log('pode dirigir')
}else(
    console.log(' nao pode dirigir')
)