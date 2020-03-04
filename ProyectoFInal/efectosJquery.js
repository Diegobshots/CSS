
//Solución con jQUery
$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.menuppal').toggleClass('is-active');
  });
  //entrada de imagen

  $('input').focus(function(){
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $("input").focusout(function(){
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
    };
  });
  $(".imgPortada").toggleClass('imgPortadaVer');
  $(".textoPortada").toggleClass('textoPortadaVer');
  $(".artistas").toggleClass('artistasVer');
  $(".formulario").toggleClass('formularioVer');
  //$(".tituloArtistas").toggleClass('tituloArtistasVer');

});
