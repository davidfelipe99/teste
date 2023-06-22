const linhas_filtro = document.querySelectorAll(".filtra_linha")
const input_filtra = document.querySelector("#input_filtra")

console.log(linhas_filtro,input_filtra)

function filtrar(Event){
    const textoinput = input_filtra.value.toUpperCase()

    for(let index= 0;index<linhas_filtro.length;index++){
        
    const linhaAtual = linhas_filtro[index]
    const conteudolinha =linhas_filtro[index].textcontent
    
    if(conteudolinha.toUpperCase().includes(textoinput)){
         linhaAtual.style.display =''
    }else{
        linhaAtual.style.display="none"
    }
}
}
input_filtra = addEventListener('keyup',filtrar)
