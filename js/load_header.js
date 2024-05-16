document.addEventListener("DOMContentLoaded", function() {
    // Crear una instancia de XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    
    // Definir la función que se ejecutará cuando el estado de la solicitud cambie
    xhttp.onreadystatechange = function() {
        // Verificar si la solicitud se completó correctamente
        if (this.readyState == 4 && this.status == 200) {
            // Insertar el contenido de header.html en el contenedor del header
            document.getElementById('header-container').innerHTML = this.responseText;

            // Añadir los event listeners para abrir y cerrar el menú después de insertar el header
            const nav = document.querySelector("#nav");
            const abrir = document.querySelector("#abrir");
            const cerrar = document.querySelector("#cerrar");

            abrir.addEventListener("click", () => {
                nav.classList.add("visibility");  
            });

            cerrar.addEventListener("click", () => {
                nav.classList.remove("visibility");  
            });
        }
    };
    
    // Configurar la solicitud GET para cargar header.html de manera asíncrona
    xhttp.open("GET", "header.html", true);
    
    // Enviar la solicitud
    xhttp.send();
});
