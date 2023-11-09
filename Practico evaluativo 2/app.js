let tablaUsuarios = $('#tablaUsers');
let tablaVisitas = $('#tablaVisits');
let tablaOrders = $('#tablaOrders');
let tablaSales = $('#tablaSales');

$('#icon2').on('click', function() {
    tablaVisitas.css('display', 'none');
    tablaSales.css('display', 'block');
    tablaUsuarios.css('display', 'none');
    tablaOrders.css('display', 'none');
})

$('#icon3').on('click', function() {
    tablaVisitas.css('display', 'none');
    tablaSales.css('display', 'none');
    tablaUsuarios.css('display', 'none');
    tablaOrders.css('display', 'block');
})

$('#icon1').on('click', function() {
    tablaVisitas.css('display', 'block');
    tablaSales.css('display', 'none');
    tablaUsuarios.css('display', 'none');
    tablaOrders.css('display', 'none');
})

$('#icon4').on('click', function() {
    tablaVisitas.css('display', 'none');
    tablaSales.css('display', 'none');
    tablaUsuarios.css('display', 'block');
    tablaOrders.css('display', 'none');
})

const $carousel = $('.carousel');
  const $imagenes = $carousel.find('.carousel-wrapper img');
  const $anterior = $('#anterior');
  const $siguiente = $('#siguiente');
  let indiceActual = 0;

  $siguiente.click(function () {
    mostarImagen(indiceActual + 1);
  });

  $anterior.click(function () {
    mostarImagen(indiceActual - 1);
  });

  function mostarImagen(index) {
    $imagenes.eq(indiceActual).fadeIn(1000);
    indiceActual = (index + $imagenes.length) % $imagenes.length;
    $imagenes.eq(indiceActual).fadeOut(1000);
  }

  setInterval(function () {
    mostarImagen(indiceActual + 1);
  }, 10000);