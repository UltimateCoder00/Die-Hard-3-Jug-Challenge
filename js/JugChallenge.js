$( document ).ready(function() {
  var jugChallenge = new JugChallenge();
  var timer;
  var timer2;

  $( "#start-button" ).click(function( event ) {
    $( "#homepage-content" ).hide();
    $( document.body ).removeAttr("background");
    $( document.body ).attr("bgcolor","black");
    $( "#challenge-content" ).show();

    fiveMinuteTimer();
  });

  function fiveMinuteTimer() {
    var countDownTimerFrom5Minutes = new Date().getTime() + (5*60*1000);

    timer = setInterval(function() {
      var timeNow = new Date().getTime();

      var countDownTimer = countDownTimerFrom5Minutes - timeNow;

      var minutes = Math.floor((countDownTimer % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((countDownTimer % (1000 * 60)) / 1000);

      document.getElementById("5-Minute-Count-Down-Timer").innerHTML = minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (countDownTimer < 0) {
          clearInterval(timer);
          jugChallenge.emptyFiveLitreJug();
          $( "#scale-button" ).click();
      }
    }, 1000);
  }

  $( "#scale-button" ).click(function( event ) {
    clearInterval(timer);

    if (jugChallenge.weighFiveLitreJug() == 4) {
      $( document.body ).removeAttr("bgcolor");
      $( document.body ).attr("bgcolor","Lime");
      $( "#challenge-content" ).hide();
      $( "#homepage-content" ).show();
      $( "#challenge-play-content" ).hide();
      $( "#congratulations-content" ).show();

      TwentyFourHourTimer();
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
    updateJugStatusImageAndText();
  });

  function TwentyFourHourTimer() {
    var countDownTimerFrom24Hours = new Date().getTime() + (24*60*60*1000);

    timer2 = setInterval(function() {
      var timeNow = new Date().getTime();

      var countDownTimer = countDownTimerFrom24Hours - timeNow;

      var hours = Math.floor((countDownTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((countDownTimer % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((countDownTimer % (1000 * 60)) / 1000);

      document.getElementById("24-Hour-Count-Down-Timer").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";

      if (countDownTimer < 0) {
          clearInterval(timer2);
          $( "#tryagain-button2" ).click();
      }
    }, 1000);
  }

  $( "#tryagain-button" ).click(function( event ) {
    $( document.body ).removeAttr("background");
    $( document.body ).attr("background","./images/danger.png");
    $( "#boom-content" ).hide();
    $( "#challenge-play-content" ).show();
  });

  $( "#tryagain-button2" ).click(function( event ) {
    clearInterval(timer2);

    $( document.body ).removeAttr("background");
    $( document.body ).attr("background","./images/danger.png");
    $( "#congratulations-content" ).hide();
    $( "#challenge-play-content" ).show();
  });

  $( "#jug1tap-button" ).click(function( event ) {
    jugChallenge.fillThreeLitreJug();
    updateJugStatusImageAndText();
  });

  $( "#jug1empty-button" ).click(function( event ) {
    jugChallenge.emptyThreeLitreJug();
    updateJugStatusImageAndText();
  });

  $( "#jug1pouring-button" ).click(function( event ) {
    jugChallenge.pourIntoFiveLitreJug();
    updateJugStatusImageAndText();
  });

  $( "#jug2tap-button" ).click(function( event ) {
    jugChallenge.fillFiveLitreJug();
    updateJugStatusImageAndText();
  });

  $( "#jug2empty-button" ).click(function( event ) {
    jugChallenge.emptyFiveLitreJug();
    updateJugStatusImageAndText();
  });

  $( "#jug2pouring-button" ).click(function( event ) {
    jugChallenge.pourIntoThreeLitreJug();
    updateJugStatusImageAndText();
  });

  function updateJugStatusImageAndText() {
    if (jugChallenge.isThreeLitreJugFull()) {
      $( "#empty-jug1" ).hide();
      $( "#half-full-jug1" ).hide();
      $( "#full-jug1" ).show();
      $("#jug1-litres").text("The Jug Is Full");
    } else if (jugChallenge.isThreeLitreJugEmpty()) {
      $( "#empty-jug1" ).show();
      $( "#half-full-jug1" ).hide();
      $( "#full-jug1" ).hide();
      $("#jug1-litres").text("The Jug Is Empty");
    }
    else {
      $( "#empty-jug1" ).hide();
      $( "#half-full-jug1" ).show();
      $( "#full-jug1" ).hide();
      $("#jug1-litres").text("The Jug Has ??? Litres");
    }

    if (jugChallenge.isFiveLitreJugFull()) {
      $( "#empty-jug2" ).hide();
      $( "#half-full-jug2" ).hide();
      $( "#full-jug2" ).show();
      $("#jug2-litres").text("The Jug Is Full");
    } else if (jugChallenge.isFiveLitreJugEmpty()) {
      $( "#empty-jug2" ).show();
      $( "#half-full-jug2" ).hide();
      $( "#full-jug2" ).hide();
      $("#jug2-litres").text("The Jug Is Empty");
    }
    else {
      $( "#empty-jug2" ).hide();
      $( "#half-full-jug2" ).show();
      $( "#full-jug2" ).hide();
      $("#jug2-litres").text("The Jug Has ??? Litres");
    }
  }
});
