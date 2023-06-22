const retangulo = document.querySelector(".retangulo")
const botao =document.querySelector(".btn")

console.log(botao,retangulo)

function classe(){
    retangulo.classList.toggle('muda_cor')
}

botao.addEventListener("click",classe)