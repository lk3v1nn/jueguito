
function Es_Mayuscula(letra)
{
    if (letra == letra.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

var character = 'S = e | a b';
let lista = character.split('');
let k = 0;
let l = 0;
let mayus = [];
let minus = [];
for (let i = 0; i < lista.length; i++){
    if (Es_Mayuscula(lista[i])){
        if(lista[i]!=' ' && lista[i] != '=' && lista[i]!='|'){
            mayus[k] = lista[i];
            k++;
        }
    }
    else {
        minus[l] = lista[i];
        l++;
    }
}
console.log('Cadena');
console.log(character);
console.log('Mayusculas')
for (i=0; i < mayus.length; i++){
    console.log(mayus[i]);
}
console.log('Minusculas')
for (i=0; i < minus.length; i++){
    console.log(minus[i]);
}