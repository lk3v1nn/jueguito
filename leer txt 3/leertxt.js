function leertxt() {
    const txt = document.getElementById('txt');
    const archivo = txt.files[0];
    
    const reader = new FileReader();
    reader.readAsText(archivo);
  
    reader.onload = () => {
      const contenido = reader.result;
      //Muestra contenido en consola
      console.log(`El contenido del archivo es: \n${contenido}`);
      //Cadena de mostrara los saltos de linea en el html
      const nuevoContenido = contenido.split('\n').join('<br>');
      //Envia el contenido al elmento id='tex' del html
      const cadena = document.getElementById('text');
      cadena.innerHTML = nuevoContenido;
    };
  }