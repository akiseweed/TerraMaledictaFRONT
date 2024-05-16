document.addEventListener("DOMContentLoaded", function() {
    // Crear una instancia de XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    
    // Definir la función que se ejecutará cuando el estado de la solicitud cambie
    xhttp.onreadystatechange = function() {
        // Verificar si la solicitud se completó correctamente
        if (this.readyState == 4 && this.status == 200) {
            // Insertar el contenido de header.html en el cuerpo del documento
            document.body.insertAdjacentHTML('afterbegin', this.responseText);
            
            // Añadir los event listeners para abrir y cerrar el menú después de insertar el header
            const nav = document.querySelector("#nav");
            const abrir = document.querySelector("#abrir");
            const cerrar = document.querySelector("#cerrar");

            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            })

            // Añadir evento de clic para el botón cerrar
            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            })
        }
    };
    
    // Configurar la solicitud GET para cargar header.html de manera asíncrona
    xhttp.open("GET", "header.html", true);
    
    // Enviar la solicitud
    xhttp.send();
});
