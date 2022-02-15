var remedio = document.getElementById(`fremedio`)
var hora = document.getElementById(`fhora`)
var intervalo = document.getElementById(`fintervalo`)
var dias = document.getElementById(`fdias`)
var res = document.getElementById(`fres`)
var imp = document.getElementById(`imprimir`)

function gravar(){ // validaçao de erro no formulario
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
        var item = document.createElement(`h3`) // Impressao do nome do remedio
        item.innerHTML = `&#128138 ${remedio.value.toUpperCase()}:`
        res.appendChild(item)

        var proxh = parseInt(hora.value.toString()) // Impressao do horario ao lado do dia do remedio
        var min = hora.value.split(`:`)[1]
        var int = parseInt(intervalo.value)
        var horalimite = proxh + int  

        for(var d = 1; d <= Number(dias.value); d++){ //impressao dos dias a serem tomado o remedio
            
            var itemdia = document.createElement(`p`)
            itemdia.innerHTML = `${d}° dia: `
            res.appendChild(itemdia)

           if(d == 1){ // teste do primeiro dia

                for(var proxh = parseInt(hora.value.toString()); proxh < 24; proxh += int){ //impressao dos horarios a tomar o remedio
                    
                    var itemhora = document.createElement(`p`)
                    itemhora.innerHTML +=`&#128306 ${proxh}:${min} | `
                    itemhora.style.display = `inline-block`
                    itemhora.style.backgroundColor = `rgba(255, 255, 255, 0)`
                    itemdia.appendChild(itemhora)
                }

            } else if (d > 1 && horalimite < 24) { // teste dos demais dias com hora normal

                for(proxh = horalimite - 24; proxh < 24; proxh += int){ //impressao dos horarios a tomar o remedio
                    
                    if(proxh < 0){ // validaçao de numero negativo
                    }else{
                        var itemhora = document.createElement(`p`)
                        itemhora.innerHTML += `&#128306 ${proxh}:${min} | `
                        itemhora.style.display = `inline-block`
                        itemhora.style.backgroundColor = `rgba(255, 255, 255, 0)`
                        itemdia.appendChild(itemhora)
                    }
                }

            } else if (d > 1 && horalimite >= 24){ // teste dos demais dias com hora acim de 24
                
                for(proxh = horalimite - 24; proxh < 24; proxh += int){ //impressao dos horarios a tomar o remedio
                    
                    if(proxh < 0){ // validaçao de numero negativo
                    }else{
                        var itemhora = document.createElement(`p`)
                        itemhora.innerHTML += `&#128306 ${proxh}:${min} | `
                        itemhora.style.display = `inline-block`
                        itemhora.style.backgroundColor = `rgba(255, 255, 255, 0)`
                        itemdia.appendChild(itemhora)
                    }
                }
                
            }

        }

    }
    
    document.getElementById(`fremedio`).value=`` // limpesa do formulario
    document.getElementById(`fhora`).value=``
    document.getElementById(`fintervalo`).value=``
    document.getElementById(`fdias`).value=``
    imp.disabled = false
    remedio.focus()
} 

function imprimir(){ // funcao imprimir

    var dados = document.getElementById(`fres`).innerHTML
    var imprimir = window.open()
    imprimir.document.write(innerHTML = `<p style="text-align: center;"> Obrigado por utilizar meu site! </p>` + `<div style="font-size: 1vh; padding: 0px 100px">${dados}</div>` + `<p style="text-align: center;">Tome seus remédios no horario certo, acompanhe o tratamento junto ao seu médico de confiança e MELHORAS!!`)
    imprimir.print()

}

function reset(){ // funcao reset
    var btn = document.getElementById(`reset`)
    btn.addEventListener(`click`, function(){location.reload()})

}