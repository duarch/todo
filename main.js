
$("#plus").click(function () {
    $("#new").fadeToggle("linear");
});



$("#newtask").keydown(function (e) {
    if (e.which == 13) {
        var inputVal = $(this).val();
        $("#list").append("<li class='list-group-item todo'>"+inputVal+"</li>")
    }
})


$( ".todo" ).hover(
    function() {
      $( this ).prepend( $( "<span class='trash'><i class='fas fa-trash'></i></span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
    
  );
// function(){
//     $(this).toggle("slide","right")
//     }