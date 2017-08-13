$( document ).ready(function() {
  var jugChallenge = new JugChallenge();

  $( "#start-button" ).click(function( event ) {
    $( "#homepage-content" ).hide();
    $( document.body ).removeAttr("background");
    $( document.body ).attr("bgcolor","black");
    $( "#challenge-content" ).show();
  });

  $( "#scale-button" ).click(function( event ) {
    if (jugChallenge.weighFiveLitreJug() == 4) {
      $( document.body ).removeAttr("bgcolor");
      $( document.body ).attr("bgcolor","Lime");
      $( "#challenge-content" ).hide();
      $( "#homepage-content" ).show();
      $( "#challenge-play-content" ).hide();
      $( "#congratulations-content" ).show();
    } else {
      $( document.body ).removeAttr("bgcolor");
      $( document.body ).attr("background","./images/boom.png");
      $( "#challenge-content" ).hide();
      $( "#homepage-content" ).show();
      $( "#challenge-play-content" ).hide();
      $( "#boom-content" ).show();
    }
    jugChallenge.emptyThreeLitreJug();
    jugChallenge.emptyFiveLitreJug();
  });

  $( "#tryagain-button" ).click(function( event ) {
    $( document.body ).removeAttr("background");
    $( document.body ).attr("background","./images/danger.png");
    $( "#boom-content" ).hide();
    $( "#challenge-play-content" ).show();
  });

  $( "#tryagain-button2" ).click(function( event ) {
    $( document.body ).removeAttr("background");
    $( document.body ).attr("background","./images/danger.png");
    $( "#congratulations-content" ).hide();
    $( "#challenge-play-content" ).show();
  });

  $( "#jug1tap-button" ).click(function( event ) {
    $( "#empty-jug1" ).hide();
    $( "#half-full-jug1" ).hide();
    $( "#full-jug1" ).show();
    jugChallenge.fillThreeLitreJug();
  });

  $( "#jug1empty-button" ).click(function( event ) {
    $( "#empty-jug1" ).show();
    $( "#half-full-jug1" ).hide();
    $( "#full-jug1" ).hide();
    jugChallenge.emptyThreeLitreJug();
  });

  $( "#jug1pouring-button" ).click(function( event ) {
    $( "#empty-jug1" ).hide();
    $( "#half-full-jug1" ).show();
    $( "#full-jug1" ).hide();
    jugChallenge.pourIntoFiveLitreJug();
  });

  $( "#jug2tap-button" ).click(function( event ) {
    $( "#empty-jug2" ).hide();
    $( "#half-full-jug2" ).hide();
    $( "#full-jug2" ).show();
    jugChallenge.fillFiveLitreJug();
  });

  $( "#jug2empty-button" ).click(function( event ) {
    $( "#empty-jug2" ).show();
    $( "#half-full-jug2" ).hide();
    $( "#full-jug2" ).hide();
    jugChallenge.emptyFiveLitreJug();
  });

  $( "#jug2pouring-button" ).click(function( event ) {
    $( "#empty-jug2" ).hide();
    $( "#half-full-jug2" ).show();
    $( "#full-jug2" ).hide();
    jugChallenge.pourIntoThreeLitreJug();
  });
});
