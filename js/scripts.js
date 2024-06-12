$(document).ready(function() {
    var slideTexts = $(".slide-text");
    var currentIndex = 0;
  
    function showNextSlide() {
      $(slideTexts[currentIndex]).animate({ opacity: 0 }, 500, function() {
        $(this).css("animation", "none");
        currentIndex = (currentIndex + 1) % slideTexts.length;
        $(slideTexts[currentIndex]).css("animation", "slide-in 0.5s ease-out forwards");
      });
    }
  
    showNextSlide();
    setInterval(showNextSlide, 5000);
  });