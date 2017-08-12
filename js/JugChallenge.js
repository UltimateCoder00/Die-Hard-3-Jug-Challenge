$( document ).ready(function() {
  var jugChallenge = new JugChallenge();

  $( "#homepage-content" ).click(function( event ) {
    $( this ).hide();
    $( "#challenge-content" ).show();
  });

  $( "#scale-button" ).click(function( event ) {
    $( "#challenge-content" ).hide();
    $( "#homepage-content" ).show();
    $( "#challenge-play-content" ).hide();
    $( "#boom-content" ).show();
  });

  $( "#tryagain-button" ).click(function( event ) {
    $( "#boom-content" ).hide();
    $( "#challenge-play-content" ).show();
  });
});
