//$(document).ready(function () {
//
//  var displayValue = $(".nav-burger").css("display");
//  
//  if (displayValue === "block") {
//    
//    
////    $(".nav-burger").click(function () {
////      $(".nav-list").toggle();
////      console.log(displayValue);
////    });
//    
//    $(".nav-burger").click(function (event) {
//      event.stopPropagation();
//      $(".nav-list").toggle();
//    });
//    
//    $(document).click(function () {
//      $(".nav-list").hide();
//      console.log(displayValue); // always block; doesn't change with click event
//
//    });
//
//  }
//});


$(document).ready(function () {

  var displayValue = $(".nav-burger").css("display");
  
  if (displayValue === "block") {
    
    
//    $(".nav-burger").click(function () {
//      $(".nav-list").toggle();
//      console.log(displayValue);
//    });
    
    $(".nav-burger").click(function (event) {
      event.stopPropagation();
      $(".nav-list").toggle();
    });
    
    $(document).click(function () {
      $(".nav-list").hide();
      console.log(displayValue); // always block; doesn't change with click event

    });

  }
});

