$(document).ready(function(){
    $('#botonPaso1').click(function (){
        $('#form_paso1').css('display','none');
        $('#form_paso2').css('display','block');
    });

    $('#botonVolverPaso1').click(function (){
        $('#form_paso1').css('display','block');
        $('#form_paso2').css('display','none');
    });

    $('#botonPaso2').click(function (){
        $('#form_paso2').css('display','none');
        $('#form_paso3').css('display','block');
            
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let dni = $('#dni').val();
        let cuil = $('#cuil').val();

        let resumenNombre = $('#resumenNombre');
        let resumenApellido = $('#resumenApellido');
        let resumenDni = $('#resumenDni');
        let resumenCuil = $('#resumenCuil');
        
        resumenNombre.text(nombre);
        resumenApellido.text(apellido);
        resumenDni.text(dni);
        resumenCuil.text(cuil);

    });

    $('#botonVolverPaso2').click(function (){
        $('#form_paso2').css('display','block');
        $('#form_paso3').css('display','none');
    });


    $('#botonPaso3').click(function (){
        alert('El registro se ha completado con exito!');
    });
    

});