// ** METHOD 3 // not on document.ready 
// .nav-list has display: none; .visible has display: block;
// not sure if this is better = it might prevent the .nav-list from showing when page loads?

  $(".nav-burger").click(function () {
    $(".nav-list").toggleClass("visible");
    
  });
  var displayValue = $(".nav-burger").css("display");
  console.log(displayValue);
  if (displayValue === "block") {
    $(document).click(function () {
      $(".nav-list").hide();
    });
    $(".nav-burger").click(function (event) {
      event.stopPropagation();
      $(".nav-list").toggle();
    });
  }
