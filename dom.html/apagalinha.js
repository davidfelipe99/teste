const linhas = document.querySelectorAll(".linhaul")



function ApagaLinha( Event){

    const LinhaClicada = Event.Target
    LinhaClicada.remove()
}

for(let  index = 0; index < 6; index++){
    linhas[index].addEventListener("click",ApagaLinha)
}
