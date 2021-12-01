let cambio = document.querySelector('img');

cambio.addEventListener('dblclick',cambiar);

function cambiar(){
    let otrafoto = document.querySelector('.imga');
    otrafoto.src = 'imagenesAldair/aldair2.jpg';
};

let cambio2 = document.querySelector('img');

cambio2.addEventListener('click',cambiar2);

function cambiar2(){
    let otrafoto2 = document.querySelector('.imga');
    otrafoto2.src = 'imagenesAldair/aldair.jpg';
};

let buttonAdd = document.getElementById('botonAg');

buttonAdd.addEventListener('click', Agregar);

let j = 5;

function Agregar() {


    if (j < 10) {

        ++j;
        let nombre = prompt('Pelicula:');
        let calif = prompt('Calificación:');
        let url = prompt('URL de imagen:');

        let fila = document.createElement('tr');
        fila.className = 'renglones';
        fila.id = `fila_${j}`;

        let top = document.createElement('td');
        top.innerHTML = j;
        fila.appendChild(top);

        let pelicula = document.createElement('td');
        pelicula.innerHTML = nombre;
        fila.appendChild(pelicula);

        let calificacion = document.createElement('td');
        calificacion.innerHTML = calif;
        fila.appendChild(calificacion);


        let tabla = document.querySelector("#table-peli tbody");

        
        tabla.appendChild(fila);

        Cambiar(nombre, url);

        switch (j) {
            case 6:
                let filas_6 = document.querySelector('#fila_6');
                filas_6.addEventListener('mouseover', function() {
                    let imgUrl = document.getElementById('pelicam');
                    let nombreImagen = document.querySelector('h3');
                    nombreImagen.innerHTML = nombre;
                    imgUrl.src = url;
                });
                break;
            case 7:
                let filas_7 = document.querySelector('#fila_7');
                filas_7.addEventListener('mouseover', function() {
                    let imgUrl = document.getElementById('pelicam');
                    let nombreImagen = document.querySelector('h3');
                    nombreImagen.innerHTML = nombre;
                    imgUrl.src = url;
                });
                break;
            case 8:
                let filas_8 = document.querySelector('#fila_8');
                filas_8.addEventListener('mouseover', function () {
                    let imgUrl = document.getElementById('pelicam');
                    let nombreImagen = document.querySelector('h3');
                    nombreImagen.innerHTML = nombre;
                    imgUrl.src = url;
                });
                break;
            case 9:
                let filas_9 = document.querySelector('#fila_9');
                filas_9.addEventListener('mouseover', function () {
                    let imgUrl = document.getElementById('pelicam');
                    let nombreImagen = document.querySelector('h3');
                    nombreImagen.innerHTML = nombre;
                    imgUrl.src = url;
                });
                break;
                case 10:
                    let filas_10 = document.querySelector('#fila_10');
                    filas_10.addEventListener('mouseover', function () {
                        let imgUrl = document.getElementById('pelicam');
                        let nombreImagen = document.querySelector('h3');
                        nombreImagen.innerHTML = nombre;
                        imgUrl.src = url;
                    });
                    break;
            default:
                break;
        }


    } else {
        alert('Solo se permiten 10 registros')
    }
}

let buttonDelete = document.getElementById('botonBo');

buttonDelete.addEventListener('click', Eliminar);

function Eliminar() {
    let tabla = document.querySelector("#table-peli tbody");

    let ultimo = tabla.lastChild;
    tabla.removeChild(ultimo);
}

function Cambiar(nombre, url) {
    let imgUrl = document.getElementById('pelicam');
    let nombreImagen = document.querySelector('h3');
    nombreImagen.innerHTML = nombre;
    imgUrl.src = url;
}


let filas_1 = document.querySelector('#fila_1');
fila_1.addEventListener('mouseover', cambiar1);

function cambiar1() {
    let imgUrl = document.getElementById('pelicam');
    let nombreImagen = document.querySelector('h3');
    nombreImagen.innerHTML = 'Matrix';
    imgUrl.src = 'imagenes/Matrix.jpg';
};

let filas_2 = document.querySelector('#fila_2');
fila_2.addEventListener('mouseover', cambiar2);

function cambiar2() {
    let imgUrl = document.getElementById('pelicam');
    let nombreImagen = document.querySelector('h3');
    nombreImagen.innerHTML = 'Blade Runner';
    imgUrl.src = 'imagenes/Blade.jpg';
};

let filas_3 = document.querySelector('#fila_3');
fila_3.addEventListener('mouseover', cambiar3);

function cambiar3() {
    let imgUrl = document.getElementById('pelicam');
    let nombreImagen = document.querySelector('h3');
    nombreImagen.innerHTML = 'Interlestar';
    imgUrl.src = 'imagenes/Interlestar.jpg';
};

let filas_4 = document.querySelector('#fila_4');
fila_4.addEventListener('mouseover', cambiar4);

function cambiar4() {
    let imgUrl = document.getElementById('pelicam');
    let nombreImagen = document.querySelector('h3');
    nombreImagen.innerHTML = 'Watchmen';
    imgUrl.src = 'imagenes/Watchmen.jpg';
};

let filas_5 = document.querySelector('#fila_5');
fila_5.addEventListener('mouseover', cambiar5);

function cambiar5() {
    let imgUrl = document.getElementById('pelicam');
    let nombreImagen = document.querySelector('h3');
    nombreImagen.innerHTML = 'Harry potter';
    imgUrl.src = 'imagenes/harry.jpg';
};