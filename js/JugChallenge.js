$( document ).ready(function() {
  var jugChallenge = new JugChallenge();

  $( "#start-button" ).click(function( event ) {
    $( "#homepage-content" ).hide();
    $( document.body ).removeAttr("background");
    $( document.body ).attr("bgcolor","black");
    $( "#challenge-content" ).show();
  });

  $( "#scale-button" ).click(function( event ) {
    $( document.body ).removeAttr("bgcolor");
    $( document.body ).attr("background","./images/boom.png");
    $( "#challenge-content" ).hide();
    $( "#homepage-content" ).show();
    $( "#challenge-play-content" ).hide();
    $( "#boom-content" ).show();
  });

  $( "#tryagain-button" ).click(function( event ) {
    $( document.body ).removeAttr("background");
    $( document.body ).attr("background","./images/danger.png");
    $( "#boom-content" ).hide();
    $( "#challenge-play-content" ).show();
  });

  $( "#jug1tap-button" ).click(function( event ) {
    jugChallenge.fillThreeLitreJug();
  });

  $( "#jug1empty-button" ).click(function( event ) {
    jugChallenge.emptyThreeLitreJug();
  });

  $( "#jug1pouring-button" ).click(function( event ) {
    jugChallenge.pourIntoFiveLitreJug();
  });

  $( "#jug2tap-button" ).click(function( event ) {
    jugChallenge.fillFiveLitreJug();
  });

  $( "#jug2empty-button" ).click(function( event ) {
    jugChallenge.emptyFiveLitreJug();
  });
});
