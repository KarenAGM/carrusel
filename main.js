const slider = document.querySelector(".carrusel");

slider.innerHTML += slider.innerHTML;


const fila = document.getElementById('contenedor_carrusel');

const flecha_izquierda = document.getElementById('flecha_izquierda');
const flecha_derecha = document.getElementById('flecha_derecha');

flecha_derecha.addEventListener('click',() => {

    fila.scrollLeft += 190;
});

flecha_izquierda.addEventListener('click',() => {

    fila.scrollLeft -= 190;
});

