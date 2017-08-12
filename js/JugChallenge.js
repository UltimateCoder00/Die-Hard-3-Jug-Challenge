$( document ).ready(function() {
  var jugChallenge = new JugChallenge();

  $( "#homepage-content" ).click(function( event ) {
    $( this ).hide();
    $( "#challenge-content" ).show();
  });
});
