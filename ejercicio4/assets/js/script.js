// Variable para guardar color seleccionado.
let colorTecla;

// Variables para cada div.
let eleDiv1 = document.getElementById("div-1");
let eleDiv2 = document.getElementById("div-2");
let eleDiv3 = document.getElementById("div-3");
let eleDiv4 = document.getElementById("div-4");

// Evento de teclas para capturar el color deseado.
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        colorTecla = "purple";

    } else if (event.key === 's') {
        /* Cambiar a color 2 */
        colorTecla = "pink";
        
    } else if (event.key === 'd') {
        /* Cambiar color 3 */
        colorTecla = "grey";
    }
});

// Funcion pintar Div.
function pintar(elementoDiv) {
    elementoDiv.style.backgroundColor = colorTecla;
}

// Asigno evento click a div-1.
eleDiv1.addEventListener("click", function() {
    pintar(eleDiv1);
});

// Asigno evento click a div-2.
eleDiv2.addEventListener("click", function() {
    pintar(eleDiv2);
});

// Asigno evento click a div-3.
eleDiv3.addEventListener("click", function() {
    pintar(eleDiv3);
});

// Asigno evento click a div-4.
eleDiv4.addEventListener("click", function() {
    pintar(eleDiv4);
});