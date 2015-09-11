//$(document).ready(function () {
//  $('body').addClass('js');
//  var $nav = $('.nav'),
//      $navlink = $('.nav-link');
//  
//  $navlink.click(function() {
//    $nav.toggleClass('active');
//    return false;
//  });
//  
//    $('.nav').click(function () {
//          $nav.toggleClass('active');
////    $(this).next('.nav').toggleClass('active');
//    });
//  
//});

//$(document).ready(function () {
////  $(".nav-burger").click(function () {
//////    $(".nav-list").toggleClass("visible");
////    $(".nav-list").toggle();
//    
////  });
//  $(document).click(function () {
//    $(".nav-list").hide();
//  });
//  $(".nav-burger").click(function (event) {
//    event.stopPropagation();
//    $(".nav-list").toggle();
//  });
//});
//
//
//
//$(document).ready(function () {
//  $(".nav-burger").click(function () {
////    $(".nav-list").toggleClass("visible");
//    $(".nav-list").toggle();
//    
//  });
//  $(document).click(function () {
//    $(".nav-list").hide();
//  });
//  $(".nav-burger").click(function (event) {
//    event.stopPropagation();
//    $(".nav-list").toggle();
//  });
//});

// ** METHOD 5 Final
$(document).ready(function () {

  var displayValue = $(".nav-burger").css("display");
//  console.log(displayValue);
  if (displayValue === "block") {
    $(document).click(function () {
      $(".nav-list").hide();
    });
    $(".nav-burger").click(function (event) {
      event.stopPropagation();
      $(".nav-list").toggle();
    });
  }
});


//// ** METHOD 2 
//// .nav-list is displayed, but it is hidden with an extra line; doesn't use .visible, and can 2 lines of code
//$(document).ready(function () {
//  $(".nav-list").hide();
//  
//  $(document).click(function () {
//    $(".nav-list").hide();
//  });
//  $(".nav-burger").click(function (event) {
//    event.stopPropagation();
//    $(".nav-list").toggle();
//  });
//});

//// ** METHOD 4 // trying to make it work when viewport resizes
//$(document).ready(function () {
//  $(".nav-burger").click(function () {
//    $(".nav-list").toggleClass("visible");
//    
//  });
//  var displayValue = $(".nav-burger").css("display");
//  var mq = window.matchMedia("(min-width: 600px)");
//  if (mq.matches) {
//    console.log("hello");
//  }
//  console.log(displayValue);
//  if (displayValue === "block") {
//    $(document).click(function () {
//      $(".nav-list").hide();
//    });
//    $(".nav-burger").click(function (event) {
//      event.stopPropagation();
//      $(".nav-list").toggle();
//    });
//  }
//});

//
//// ** METHOD 1 
//// .nav-list has display: none; .visible has display: block;
//// not sure if this is better = it might prevent the .nav-list from showing when page loads?
//$(document).ready(function () {
//  $(".nav-burger").click(function () {
//    $(".nav-list").toggleClass("visible"); // not needed because jQ .toggle acts on the display property!!!
//    
//  });
//  var displayValue = $(".nav-burger").css("display");
////  console.log(displayValue);
//  if (displayValue === "block") {
//    $(document).click(function () {
//      $(".nav-list").hide();
//    });
//    $(".nav-burger").click(function (event) {
//      event.stopPropagation();
//      $(".nav-list").toggle();
//    });
//  }
//});