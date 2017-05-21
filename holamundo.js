function ejecutar() {

var palabra = document.getElementById("valor").value.toString();

document.getElementById("palabras").innerHTML = "La palabra ingresada es:  "+ palabra;

}

function limpiar() {



document.getElementById("palabras").innerHTML = "";
document.getElementById("valor").value = "";

}
