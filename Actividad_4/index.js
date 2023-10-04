document.addEventListener("DOMContentLoaded", function (){

    const columnas = document.querySelectorAll('.td-body');

    columnas.forEach(function (columna){
        const filas = columna.parentNode;
        columna.addEventListener("click", function(){
            filas.classList.toggle('columnaResaltada');
        })
    });

    const columnasTHead = document.querySelectorAll('.th-head')

    columnasTHead.forEach(function(columna){
        filas = columna.parentNode;
        columna.addEventListener("click", function(){
            filas.classList.toggle('headerResaltado');
        })
    });


})