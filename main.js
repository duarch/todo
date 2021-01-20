
$("#plus").click(function () {
  $("#new").fadeToggle("linear");
});



$("#newtask").keydown(function (e) {
  if (e.which == 13) {
    var inputVal = $(this).val();
    $("#list").append("<li class='list-group-item todo'>" + inputVal + "</li>")
  }
})


$(".todo").hover(
  function () {
    $(this).addClass("pl-0")
    $(this).prepend($("<span class='trash'><i class='fas fa-trash'></i></span>"));
  }, function () {
    $(this).find("span").last().remove();
    $(this).removeClass("pl-0")
    
  }

);

$("li").click(function () {
  $(this).toggleClass("completed")
})

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
} 






// function(){
//     $(this).toggle("slide","right")
//     }
