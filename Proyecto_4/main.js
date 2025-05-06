
const miBoton = document.getElementById("Bu");

miBoton.addEventListener('click' , () => {
    let miClave = document.getElementById("Clave").value;
    let Valor = document.getElementById("Valor").value;

    localStorage.setItem(miClave,miBoton)
});