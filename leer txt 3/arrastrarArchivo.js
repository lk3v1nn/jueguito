
const areaParaArrastrar = document.querySelector('body');
const TextP = areaParaArrastrar.querySelector('p');
const button = areaParaArrastrar.querySelector("button");
const input = areaParaArrastrar.querySelector('#txt');
let archivo;
const todo = document.querySelector('body');


button.addEventListener("click", () => {
    input.click();
});
input.addEventListener('change', ()=>{
    archivo = this.archivo;
    areaParaArrastrar.classList.add('activo');
   // mostrarArchivo(archivo);
    areaParaArrastrar.classList.remove('activo');
})

//Evento que se activa cuando arrastre adentro de areaParaArrastrar
areaParaArrastrar.addEventListener('dragover', (e)=>{
    e.preventDefault();
    areaParaArrastrar.classList.add('activo');
    TextP.innerHTML = 'Suelta para carga el archivo';
});
//Evento que se activa cuando arrastre afuera de areaParaArrastrarraArrastrar
areaParaArrastrar.addEventListener('dragleave', (e)=>{
    e.preventDefault();
    areaParaArrastrar.classList.remove('activo');
    TextP.innerHTML = 'Arrastra aqui';
});
//Evento se activa cunado suelto un elemento dentro de areaParaArrastrar
areaParaArrastrar.addEventListener('drop', (e) =>{
    e.preventDefault();
    areaParaArrastrar.classList.remove('activo');
    TextP.innerHTML = 'Archivo cargado';
});

// todo.addEventListener('drop', (e)=>{
//     e.preventDefault();
// });

