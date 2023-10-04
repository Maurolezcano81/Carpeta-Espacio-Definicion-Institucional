document.addEventListener("DOMContentLoaded", function (){

    const columnas = document.querySelectorAll('.td-body');
    columnas.forEach(function (columna){
        columna.addEventListener("click", function(){
            this.classList.toggle('columnaResaltada');
        })
    });

    const columnasTHead = document.querySelectorAll('.th-head')
    columnasTHead.forEach(function(columna){
        columna.addEventListener("click", function(){
            this.classList.toggle('headerResaltado')
        })
    });


})