var remedio = document.getElementById(`fremedio`)
var hora = document.getElementById(`fhora`)
var intervalo = document.getElementById(`fintervalo`)
var dias = document.getElementById(`fdias`)
var res = document.getElementById(`fres`)
var lista = []

function gravar(){ // validaçao de erro
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
        var item = document.createElement(`p`) // Impressao do nome do remedio
        item.innerHTML = `${remedio.value.toUpperCase()}:`
        res.appendChild(item)

        var proxh = parseInt(hora.value.toString()) // Impressao do horario ao lado do dia do remedio
        var int = parseInt(intervalo.value)
        horalimite = proxh + int  

        
        // VVVVVVVVVVVVVVVVv

        for(var d = 1; d <= Number(dias.value); d++){ //impressao dos dias a serem tomado o remedio
            var itemdia = document.createElement(`p`)
            itemdia.innerHTML = `${d}° dia:`
            res.appendChild(itemdia)
        }

        for(proxh; proxh < 24; proxh += int){
            var itemhora = document.createElement(`p`)
            itemhora.innerHTML += `${proxh}`
            res.appendChild(itemhora)
        }


        /*
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
               document.body.innerHTML += i + String.fromCharCode( j + 64 ) + ' ';
            }
            document.body.innerHTML += '<br>'; // quebra de linha pra facilitar a leitura
         }
         */

         //----------

        /*
        for(var d = 1; d <= Number(dias.value); d++){ //impressao dos dias a serem tomado o remedio
            var itemdia = document.createElement(`p`)
            itemdia.innerHTML = `${d}° dia:`
            res.appendChild(itemdia)
        }
        
        if(d <= Number(dias.value)){
            var d = 1
            var itemdia = document.createElement(`p`)
            itemdia.innerHTML = `${d}° dia:`
            res.appendChild(itemdia)
            d++
        } else if (proxh < 24) {
            var itemhora = document.createElement(`p`)
            itemhora.innerHTML += `${proxh}`
            res.appendChild(itemhora)
            
        }
        */

        //------------

        /*

        for(proxh; proxh < 24; proxh += int){
            var itemhora = document.createElement(`p`)
            itemhora.innerHTML += `${proxh}`
            res.appendChild(itemhora)
        }
        */

        //------------

        /*
        if(horalimite < 24){
            alert(horalimite)
        } else {
            alert(`ok`)
        }
        */

        //---------
        
        /*
        var d = new Date()
        var hrs = hora.value.split(`:`)[0]
        var min = hora.value.split(`:`)[1]

        d.setHours(hrs)
        d.setMinutes(min)

        var total = d.getHours()+ `:` + d.getMinutes()
        alert(total)
        alert(int)
        */


        //------

        //var hrs = hora.value.split(`:`)[0]
        //var min = hora.value.split(`:`)[1]
        //var int = intervalo.value

        //alert(hrs)


        //------

        //var h = hora.value
        //var vh = h.valueOf()

        //var i = intervalo.value
        //var vi = i.valueOf()

        //-----

        //alert(String(hora.value))

    }
} 

/* 
terminar formulário de resposta
calculo de horários
adicionar botão imprimir
alterar barra de rolagem
*/



