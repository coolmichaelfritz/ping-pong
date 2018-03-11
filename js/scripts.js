$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var userNumber = parseInt($("input#ping").val())
    for (var index = 0, index <= userNumber, index ++) {
      if (userNumber % 3 === 0) {
        ping
      }
      else if (userNumber % 5 === 0) {
        pong
      }
      elst if (userNumber % 15 === 0) {
        ping-pong
      }
    }

    $("#letsCount").show();





  event.preventDefault();
  });

});
