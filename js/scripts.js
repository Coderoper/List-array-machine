// var favoriteItem1 = $("input#favorite1").val();
// var favoriteItem2 = $("input#favorite2").val();
// var array1 = [favoriteItem1, favoriteItem2];

$(document).ready(function(){
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    $(".blank").text("");

    $("#result").append("<li>" + " " + "</li>")
    var blanks = ["favoriteItem1", "favoriteItem2"];
    blanks.forEach(function(blank)
    {
      var userInput = $("input#" + blank).val();
      $("#result").append(" " + userInput + "");
    });

    $("#result").show();

  });

});
