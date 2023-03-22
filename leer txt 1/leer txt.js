// Crea una instancia de objeto XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Define la función que se ejecutará cuando se complete la solicitud
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Actualiza el contenido del elemento textarea con el contenido del archivo de texto
    document.getElementById("texto").value = this.responseText;
  }
};

// Abre el archivo de texto utilizando el método GET y la URL del archivo
xhttp.open("GET", "archivo.txt", true);

// Envía la solicitud al servidor
xhttp.send();