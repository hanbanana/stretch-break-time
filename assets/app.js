
$(document).ready(function () {



  function move() {
    var elem = document.getElementById("myProgress");
    var countdown = document.getElementById("countdown");
    var width = 100;
    var id = setInterval(frame, 300);
    function frame() {
      if (width <= 220) {
        width--;
        elem.style.width = width + '%';
        // elem.innerHTML = 100 - width  + '%';        
      }
      if (width <= 0) {
        clearInterval(id);
        location.reload();
      }
    }


    var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function () {
      seconds--;
      // (seconds == 1) ? document.getElementById("plural").textContent = "": document.getElementById("plural").textContent = "s";
      document.getElementById("countdown").textContent = seconds;
      if (seconds <= 0) clearInterval(countdown);
    }, 1000);

  }

  $("#start").on("click", function () {
    move();
    $("#start").hide();
    $("#reSet").show();
    $("#quote-here").text(randomItem);
  })

  $("#reSet").on("click", function () {
    location.reload();
  })


  // function move() {
  //   var elem = document.getElementById("myProgress");   
  //   var width = 100;
  //   var id = setInterval(frame, 100);
  //   function frame() {
  //     if (width <= 100) {
  //           width--; 
  //       elem.style.width = width + '%'; 
  //       elem.innerHTML = 100 - width  + '%';        
  //     } 
  //     if (width <= 0) {
  //   clearInterval(id);
  //     }
  //   }
  // }

  // $("#start").on("click", function() {
  //   move();
  // })





  // $("#start").on("click", function () {

  //   $(".progress-bar").animate({
  //     width: "100%"
  //   }, 10000);

  //   var timeleft = 10;
  //   var downloadTimer = setInterval(function () {
  //     document.getElementById("counting").innerHTML = timeleft + " seconds remaining";
  //     timeleft -= 1;
  //     if (timeleft <= 0) {
  //       clearInterval(downloadTimer);
  //       document.getElementById("counting").innerHTML = "Finished"
  //     }
  //   }, 1000);

  // })


  function alertWin() {
    setTimeout(function () { alert("Let's stretch your arms!"); window.location.reload(false); }, 60000);
  }

  $("#confirmButton").on("click", function () {

    alertWin();

  })


  var quoteList = [
    "Proverbs 18:10, The name of the Lord is a strong tower; the righteous run into it and are safe.",
    "Isaiah 41:10, So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Exodus 15:2, The Lord is my strength and my song; he has given me victory. This is my God, and I will praise him—  my father’s God, and I will exalt him!",
    "John 14:27, Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    "Psalm 138:3, When I called, you answered me; you made me bold and stouthearted.",
    "Psalm 16:8, I have set the Lord always before me. Because he is at my right hand, I will not be shaken.",
    "한글도 여기 나올수있어요^^"

  ];

  var randomItem = quoteList[Math.floor(Math.random() * quoteList.length)];

  // $("#quote-here").text(randomItem);


})