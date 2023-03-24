function insertaDatosTabla(tabla, dato){
    // Ubica la tabla
    let table = document.getElementById(tabla);
    // Ubica body
    let body = table.querySelector('tbody');
    // Inserta una fila
    let insertarFila = body.insertRow();
    insertarFila.innerHTML;
    // Inserta columnas de la fila (datos)
    let insertarColumna = insertarFila.insertCell();
    insertarColumna.innerHTML = dato;
}

function ReinsertaTabla() {
    const tabla1 = document.getElementById('tabla1');
    const tabla2 = document.getElementById('tabla2');
    tabla1.innerHTML = "<thead><tr>Mayus</tr></thead><tbody></tbody>";
    tabla2.innerHTML = "<thead><tr>Mayus</tr></thead><tbody></tbody>";
    tabla1.classList.add('activo');
    tabla2.classList.add('activo');
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
    ReinsertaTabla()
    const txt = document.querySelector('#text');
    let letras = txt.innerHTML; // Datos del documento
    let k=0, l=0; // Contadores
    let mayus=[], minus=[]; // Listas que guardaran las letras

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

    // Muestra las mayusculas en la tabla
    for (i=0; i < mayus.length; i++){
        console.log(mayus[i]);
        insertaDatosTabla('tabla1', mayus[i]);
    }
    // Muestra las minusculas en la tabla
    for (i=0; i < minus.length; i++){
        console.log(minus[i]);
        insertaDatosTabla('tabla2', minus[i]);
    }
}