function ReinsertaTabla() {
    const tabla1 = document.getElementById('tabla1');
    const tabla2 = document.getElementById('tabla2');
    const tabla3 = document.getElementById('tabla3');
    tabla1.innerHTML = "<thead><tr><td>Variables</td></tr></thead><tbody></tbody>";
    tabla2.innerHTML = "<thead><tr><td>Terminales</td></tr></thead><tbody></tbody>";
    tabla3.innerHTML = "<thead><tr><td>Variables</td><td>Producciones</td></tr></thead><tbody></tbody>";
}

function insertaDatosTabla1_2(tabla, dato){
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
function insertaDatosTabla3(tabla, dato1, dato2){
    // Ubicar tabla
    const tabla3 = document.getElementById(tabla);
    // Ubicar body
    const body3 = tabla3.querySelector('tbody');
    // Insertar fila
    const fila3 = body3.insertRow();
    fila3.innerHTML;
    // Insertar dato 1
    const colum1 = fila3.insertCell();
    const colum2 = fila3.insertCell();
    colum1.innerHTML = dato1;
    colum2.innerHTML = dato2;
}

function Es_Mayuscula(letra)
{
    if (letra == letra.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

function V_T(){
    ReinsertaTabla()
    const txt = document.querySelector('#text');
    let letras = txt.innerHTML; // Datos del documento (Las gramaticas del .txt)
    let k=0, l=0; // Contadores
    let mayus=[], minus=[]; // Listas que guardaran las letras

    //REMPLAZA LOS CARACTERES QUE NO SE VAN A EVALUAR
    letras = letras.replace('<br>', ''); // Saltos de linea
    letras = letras.replace(/(\n)/g, ''); // Saltos de linea
    letras = letras.replace(/([<> ='|])/g, ''); // Simbolos
    
    //SEPARA TODOS LOS CARACTERES DENTRO DE UN ARRAY
    let listaSimple = letras.split('');

    // Elimina los caracteres duplicados
    const sinDuplicados = new Set(listaSimple);
    let lista = [...sinDuplicados];

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
        insertaDatosTabla1_2('tabla1', mayus[i]);
    }
    // Muestra las minusculas en la tabla
    for (i=0; i < minus.length; i++){
        console.log(minus[i]);
        insertaDatosTabla1_2('tabla2', minus[i]);
    }
    // Oculta el boton procesar
    const boton = document.getElementById('procesar');
    boton.setAttribute('hidden', true);
}

function V_P(){
    const txt = document.querySelector('#text');
    let letras = txt.innerHTML; // Datos del documento (Las gramaticas del .txt)
    letras = letras.replace(/([ '])/g, '');
    let gramaticas = letras.split('\n'); // Separo la cadena por saltos de linea
    gramaticas = gramaticas.map(e => e.replace(/<br>/g, '')); //Map ejecuta la funcion para cada elemento del array
    for (let i=0; i < gramaticas.length; i++){ // Recorre cada gramatica de la lista
        let VP = gramaticas[i].split('='); // Separa la variable y produccion. Separa por el simbolo '='
        if (VP[1].includes('|')){ // Verifica si la variable tiene varias producciones
            let P = VP[1].split('|'); // Separa las producciones del variable
            for(let i=0; i < P.length; i++){ // Recorre las producciones que separo en el paso anterior
                insertaDatosTabla3('tabla3', VP[0], P[i]); // Inserta la variable y la produccion en la tabla
            }
        }else{
            insertaDatosTabla3('tabla3', VP[0], VP[1]); // Inserta en la tabla la Variable y la Produccion
        }
    }
}

function ejtodo(){
    animEntrada();
    V_T();
    V_P();
}


