$(document).ready(function() {
  // Seleccionando elementos del DOM
  var $telephone = $('#telep');

  // Asociando eventos a los elementos seleccioandos
  $('#telep').keyup(function() {
    if ($('#telep').val().length === 10) {
      $('#signup').attr('disabled', false)
        .attr('href', '../views/verify.html');
    } else {
      $('#signup').attr('disabled', 'disabled');
    }   
  });

  // Función que genera un código aleatorio

  $('#signup').click(function() {
    var number = Math.floor(Math.random() * 900) + 100;
    alert('LAB - ' + number);
    localStorage.labCode = number;
    window.location.href = verify();
  });

  function newFunction() {
    return '../views/verify.html';
}
});


