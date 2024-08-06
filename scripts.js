const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.display = "block";
}

function esconderForm() {
    form.style.left = "-400px";
    form.style.transform = "translateX(0%)";
    mascara.style.display = "none";
}