// var favoriteItem1 = $("input#favorite1").val();
// var favoriteItem2 = $("input#favorite2").val();
// var array1 = [favoriteItem1, favoriteItem2];

$(document).ready(function(){
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    $(".blank").text("");
    // array.push(favoriteItem1);
    // array.push(favoriteItem2);
    $("#result").append("<li>" + " " + "</li>")
    var blanks = ["favoriteItem1", "favoriteItem2"];
    blanks.forEach(function(blank)
    {
      var userInput = $("input#" + blank).val();
      $("#result").append(" " + userInput + " " );
      // $("#result").append();
    });

      // $("<span>").attr("class", "blank").text(userInput)

      // )
    $("#result").show();

    // $("ul#result").append(array);
    // $("li#answer").text(array);
    // $("span#answer").text(favoriteItem2);
  //  $("ul#result").append(array);
      // $("span#answer").text(array);

  });

});
