document.addEventListener("DOMContentLoaded", function (){

    const columnas = document.querySelectorAll('.tr-body');
    columnas.forEach(function (columna){
        columna.addEventListener("click", function(){
            columna.classList.toggle('columnaResaltada');
        })
    });

    const columnasTHead = document.querySelectorAll('.th-head')
    columnasTHead.forEach(function(columna){
        columna.addEventListener("click", function(){
            this.classList.toggle('headerResaltado')
        })
    });


    const botonReiniciar = document.getElementById('botonReiniciar');

    botonReiniciar.addEventListener("click", () =>{
        columnas.forEach(columna => {
            columna.classList.remove('columnaResaltada');
            columna.style.transition = 'all 0.5s';
        })

        columnasTHead.forEach(columna => {
            columna.classList.remove('headerResaltado');
            columna.style.transition = 'all 1s'
        })
    })
    
})  

function holaNico (nico){
    alert(nico);
}