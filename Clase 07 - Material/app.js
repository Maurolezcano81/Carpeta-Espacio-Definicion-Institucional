const botonCambiar = document.getElementById('cambiarColor');

botonCambiar.addEventListener('toggle', ()=>{
    const titulos = document.querySelectorAll('.hola'); // con getElementsByTagName no sirve; de esta forma si :p

    console.log(titulos);
    titulos.forEach((titulo)=>{
        titulo.style.backgroundColor = 'red';
    })
})

// botonCambiar.addEventListener('click', cambiarColores);
function cambiarColores(){
    const elementos = $('h1');
    elementos.css('background-color', 'red'); // arreglado tambien esto, creando una variable antes
    

    // otra forma de recorrer
    const titulos = document.getElementsByTagName('h1');
    
    for(let i = 0; i < titulos.length; i++){
     titulos[i].style.backgroundColor = 'red';   
    }
    
}

