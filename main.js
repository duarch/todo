
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








// function(){
//     $(this).toggle("slide","right")
//     }