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




  // TIc tac toe
  var winner;
  var currentPlayer = 1;
  $(".start-button").click( function() {
    currentPlayer = 1;
    $(".square").text("");
    // document.getElementById("big-title").removeChild(document.getElementById("congratulations"));
    $("#congratulations").remove();
    playGame();   
  });

  function playGame() {
    $(".square").off('click').click( function() {
      if (currentPlayer == 1) {
        this.textContent = 'x';
        if(checkWinner()) {
          var congratulations = document.createElement('div');
          congratulations.textContent = "Congratulations to " +  currentPlayer + " !";
          congratulations.id = "congratulations";
          document.getElementById("big-title").appendChild(congratulations); 
        }
        currentPlayer = 2;
      } else {
        this.textContent = 'o';
        if(checkWinner()) {
          var congratulations = document.createElement('div');
          congratulations.textContent = "Congratulations to " +  currentPlayer + " !";
          congratulations.id = "congratulations";
          document.getElementById("big-title").appendChild(congratulations);
        }
        currentPlayer = 1;
      }
    });
  }

  function checkWinner() {
    var arr = [];
    $(".row").each(function(i,rrow){
      var squares = [];
      console.log(rrow);


      $(rrow).children().each(function(i,content){
        squares.push(content.textContent);
      })
      arr.push(squares);
    });

    for(let row = 0; row < arr.length; row++) {
      let firstSquare = arr[row][0];
      for(let col = 1; col < arr[row].length; col++) {
        if((!firstSquare) || (arr[row][col] != firstSquare)) {
          break;
        } else if (col == arr[row].length-1) {
          console.log('1');
          return true;
        }
      }
    }

    for(let col = 0; col < arr[0].length; col++) {
      let firstSquare = arr[0][col];
      for(let row = 1; row < arr.length; row++) {
        if((!firstSquare) || (arr[row][col] != firstSquare)) {
          break;
        } else if (row == arr.length-1) {
          console.log('2');
          return true;
        }
      }
    }

    for(let row = 0; row < arr.length; row++) {
      let firstSquare = arr[0][0];
      if ((!firstSquare)||(arr[row][row] != firstSquare)) {
        break;
      } else if (row == arr.length-1) {
        console.log('3');
        return true;
      }
    }


    for(let row = 0; row < arr.length; row++) {
      let firstSquare = arr[0][arr.length-1];
      if((!firstSquare) || (arr[row][arr.length-1-row] != firstSquare)) {
        break;
      } else if (row == arr.length-1) {
        return true;
      }     
    }  
    return false;
  }

  // Dropdown Menu
  // $('#navigation-coding').hover(function(){ 
  //     $('.coding-dropdown-hover').show();
  //   }, function(){ 
  //     $('.coding-dropdown-hover').hide();
  // });

  // $('#navigation-programming').hover(function(){ 
  //     $('.programming-dropdown-hover').show();
  //   }, function(){ 
  //     $('.programming-dropdown-hover').hide();
  // });

  // $('#navigation-design').hover(function(){ 
  //     $('.design-dropdown-hover').show();
  //   }, function(){ 
  //     $('.design-dropdown-hover').hide();
  // });
  
  // $('#navigation-about').hover(function(){ 
  //     $('.about-dropdown-hover').show();
  //   }, function(){ 
  //     $('.about-dropdown-hover').hide();
  // });

});