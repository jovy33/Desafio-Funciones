// Aqui defino funcion pintar.
function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
};

// Obtengo elemento segun ID ele1. 
ele = document.getElementById("ele1");

// Aqui asigno el evento click al elemento.
ele.addEventListener("click", function () {
    pintar(ele, "yellow");
});

// Aqui pinto de color verde al cargar la pagina.
pintar(ele);