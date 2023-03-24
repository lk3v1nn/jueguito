    const tabla = document.querySelector('#text');
    
    function ola(){
        alert(tabla.innerHTML);
    }

    
function Es_Mayuscula(letra)
{
    if (letra == letra.toUpperCase()){
        return true;
    }else{
        return false;
    }
}


function olaf(){
    eliminarTabla();
    let k=0, l=0; // Contadores
    let mayus=[], minus=[]; // Listas que guardaran las letras
    let letras = tabla.innerHTML; // Datos del documento

    //REMPLAZA LOS CARACTERES QUE NO SE VAN A EVALUAR
    letras = letras.replace(/(\n)/g, ''); // Saltos de linea
    letras = letras.replace(/([ ='|])/g, ''); // Simbolos
    letras = letras.replace('<br>', ''); // Saltos de linea

    //SEPARA TODOS LOS CARACTERES DENTRO DE UN ARRAY
    let lista = letras.split('');

    //RECORRE TODA LA LISTA PARA SEPARA MAYUSCULAS Y MINUSCULAS
    for (let i = 0; i < lista.length; i++){
        if (Es_Mayuscula(lista[i])){
            mayus[k] = lista[i];
            k++;
        }
        else {
            minus[l] = lista[i];
            l++;
        }
    }

    console.log('Cadena');
    console.log(letras);
    console.log('Mayusculas')
    for (i=0; i < mayus.length; i++){
        console.log(mayus[i]);
        insertaTabla('tabla1', mayus[i]);
    }
    console.log('Minusculas')
    for (i=0; i < minus.length; i++){
        console.log(minus[i]);
        insertaTabla('tabla2', minus[i]);
    }
}

function insertaTabla(tabla, dato){
    // Ubica la tabla
    let tablas = document.getElementById(tabla);
    // Inserta una fila
    let insertarFila = tablas.insertRow();
    insertarFila.innerHTML;
    // Inserta los datos de la fila
    let insertarColumna = insertarFila.insertCell();
    insertarColumna.innerHTML = dato;
}

function eliminarTabla(){
    let tds = document.querySelectorAll('tr');
          for(i=0;i < tds.length; i++){
         let bfila = document.querySelector('tbody');
        let fila = bfila.querySelector('tr')
         fila.remove();
     }
}