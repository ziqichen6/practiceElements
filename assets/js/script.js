$(document).ready(function() {

  // Information toolbox
  $("#info-icon-specific").hover(function(){
    $("#information-box").removeClass("hidden");
  }, function(){
    $("#information-box").addClass("hidden");
  });

  // Carousel Slide

  var currentIndex = 0,
  items = $('.carousel-item'),
  itemAmt = items.length;

  function cycleItems() {
    var item = $('.carousel-item').eq(currentIndex);
    items.hide();
    item.css('display','inline-block');
  }

  var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  }, 3000);

  $('#next').click(function() {
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
  });

  $('#prev').click(function() {
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
  });

  // Dropdown Menu
  $('#navigation-coding').hover(function(){ 
      $('.coding-dropdown').show();
    }, function(){ 
      $('.coding-dropdown').hide();
  });

  $('#navigation-programming').hover(function(){ 
      $('.programming-dropdown').show();
    }, function(){ 
      $('.programming-dropdown').hide();
  });

  $('#navigation-design').hover(function(){ 
      $('.design-dropdown').show();
    }, function(){ 
      $('.design-dropdown').hide();
  });
  
  $('#navigation-about').hover(function(){ 
      $('.about-dropdown').show();
    }, function(){ 
      $('.about-dropdown').hide();
  });


});