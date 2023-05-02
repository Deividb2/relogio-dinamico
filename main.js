const hora = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const relogio = setInterval (() => {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    } else if (min < 10) {
        min = "0" + min;
    } else if (seg < 10) {
        seg = "0" + seg;
    }

    hora.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
})