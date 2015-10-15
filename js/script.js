$(document).ready(function () {

  var displayValue = $(".nav-burger").css("display");
  
  if (displayValue === "block") { // this is to only target small viewport
    
    
//    $(".nav-burger").click(function () {
//      $(".nav-list").toggle();
//      console.log(displayValue);
//    });
    
    $(".nav-burger").on("click", function (event) {
      event.stopPropagation();
      $(".nav-list").toggle();
      return false;
    });
    
    $(document).on("click", function () {
      $(".nav-list").hide();
      console.log(displayValue); // this is always "block"; it doesn't change with click event, even though it disappears
//      return false;
    });

  }
});


//$(document).ready(function () {
//
//  $(".nav-burger").click(function (event) {
//    event.stopPropagation();
//    $(".nav-list").toggle();
//  });
//
//  $(document).click(function () {
//    $(".nav-list").hide();
//  });
//
//});