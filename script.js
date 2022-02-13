var remedio = document.getElementById(`fremedio`)
var hora = document.getElementById(`fhora`)
var intervalo = document.getElementById(`fintervalo`)
var dias = document.getElementById(`fdias`)
var res = document.getElementById(`fres`)

function gravar(){
    if(remedio.value == `` || hora.value == `` || intervalo.value == `` || dias.value == `` || intervalo.value <= 0 || intervalo.value >= 25 || dias.value < 0){
        if (remedio.value == ``) {
            alert(`[ERRO] Preencher o nome do remédio!`)
            remedio.focus()
        } else if (hora.value == ``) {
            alert(`[ERRO] Preencher o horário corretamente!`)
            hora.focus()
        } else if (intervalo.value == ``) {
            alert(`[ERRO] Preencher o intevalo corretamente!`)
            intervalo.focus()
        } else if (intervalo.value <= 0 || intervalo.value >= 25) {
            alert(`[ERRO] intervalo deve ser entre 1 a 24 horas.`)
            intervalo.focus()
        } else if (dias.value == `` || dias.value < 0) {
            alert(`[ERRO] Preencher os dias corretamente!`)
            dias.focus()
        }
    } else {
        var item = document.createElement(`p`)
        item.innerHTML = `${remedio.value.toUpperCase()}:`
        res.appendChild(item)
    }
} 




/* 
terminar formulário de resposta
calculo de horários
adicionar botão imprimir
*/