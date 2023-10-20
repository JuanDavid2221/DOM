document.addEventListener("DOMContentLoaded", function () {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const compararButton = document.getElementById("comparar");
    const resultado = document.getElementById("resultado");

    compararButton.addEventListener("click", function () {
        const pass1 = password1.value;
        const pass2 = password2.value;

        if (pass1 === pass2) {
            resultado.textContent = "Las contraseñas son iguales.";
        } else {
            resultado.textContent = "Las contraseñas no son iguales. Por favor, inténtalo de nuevo.";
        }
    });
});