document.addEventListener("DOMContentLoaded", function() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.body.insertAdjacentHTML('afterbegin', this.responseText);
        }
    };
    xhttp.open("GET", "header.html", true);
    xhttp.send();
});