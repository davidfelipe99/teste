const lista = document.querySelector(".lista")

const inputtexto= document .querySelector("#input_texto")
const inserelinha = document.querySelector("#btn_adiciona")
console.log(lista, inputtexto, btnadiciona)



function adicionalinha(){
    const linha =document.createElement("li")
    
    const textoinput = inputtexto.value
    linha.innerHTML = textoinput

    lista.appendChild(linha)
}

btnadiciona.addEventListener("click",adicionalinha)