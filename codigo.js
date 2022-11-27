const $days = document.getElementById('days'),
 $hours = document.getElementById('hours'),
 $minutes = document.getElementById('minutes'),
 $seconds = document.getElementById('seconds'),
 $finalMessage = document.querySelector('.final-sms');

//fecha a futuro
const countdownDate = new Date('Dec 31, 2022 00:00:00').getTime();

//para que nuestros segundos se vayan actualizando cada milisegundo vamos a usar un setInterval
let interval = setInterval(function(){
    //obtener fecha actual y milisegundos
    const now = new Date().getTime();

//ahora vamos a obtener las distancias entre ambas fechas
let distance = countdownDate - now;

//calculos a dias, horas, minutos y segundos
let days = Math.floor(distance / (1000 * 60 * 60 * 24))//nos da un valor en decimales
//con Math.floor le sacamos los decimales

let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / (1000));


//escribimos los resultados
$days.innerHTML = days;
$hours.innerHTML = hours;
$minutes.innerHTML = minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);

//cuando llege a 0
if(distance < 0){
    clearInterval(interval);
    $finalMessage.style.transform = 'translateY(0)';
}

}, 1000);//se actualiza cada 1 segundo (1000 milisegundos es 1 segundo)

