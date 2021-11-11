var horario = new Date()
var hora = horario.getHours()
var min = horario.getMinutes()
var seg = horario.getSeconds()
var ano = horario.getFullYear()
var dia = horario.getDate()
var mes = horario.getMonth()
var re = document.getElementById('relogio')
var anos = document.getElementById('ano')

var meses = document.getElementById('mes')

var mese = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

meses.innerHTML = mese[mes]
anos.innerHTML = ano
setInterval(function(){
 seg++
    if(hora < 10){
        hora = '0' + hora
    }else if(min < 10){
        min = '0' + min 
    }else if(seg < 10){
        seg = '0' + seg
    }
if(seg >= 59){
    min++
    seg = 0
}
if(seg >= 59){
    seg++
    min = 0
}
 re.innerHTML = hora + ' : ' + min + ' : ' + seg      

},1000)
