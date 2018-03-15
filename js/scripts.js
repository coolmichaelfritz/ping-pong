//Business logic

var counter = function(userNumber) {
  var results = [];
  for (var index = 1; index <= userNumber; index ++) {
    if (index % 15 === 0) {
      results.push("ping-pong");
    }
    else if (index % 5 === 0) {
      results.push("pong");
    }
    else if (index % 3 === 0) {
      results.push("ping");
    }
    else {
      results.push(index);
    }
  }
  return results;
}





//UI logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#ping").val())
    var userResults = counter(userNumber);
// //testing this one
//     userResults.forEach (function(item) {
//       $("ul#LetsCount").append("<li>" + item + "</li>");
//     });
    for (var i = 0; i < userResults.length; i++) {
      $("ul#letsCount").append("<li>" + userResults[i] + "</li>");
    }
  });
});
