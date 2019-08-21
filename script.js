// anime({
//   targets: "img",
//   rotate: "1turn",
//   easing: "linear",
//   loop: true,
//   duration: 10000
// });

anime({
  targets: "#venus",
  translateX: [-300,400],
  translateY: [100,-500],
  rotate: '1turn',
  scale: 1.5,
  easing: 'easeInOutQuart',
  duration: 7000,
  direction: 'alternate',
  loop: true
})

/* Parallax*/
function parallax() {
    var headers = document.querySelectorAll(".title");
    var multiplier = 0.1;
    
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        var distance = elementDistanceFromBottomOfViewport(header);
        header.style.transform = "translateY(-" + distance*multiplier + "px)";
      }
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', parallax, false); 
    addEventListener('load', parallax, false);
    addEventListener('scroll', parallax, false);
  }
  
  function elementDistanceFromBottomOfViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return window.innerHeight - rect.top;
  }

  function checkForVisibility() {
    var headers = document.querySelectorAll(".header");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("headerVisible");
      } else {
        header.classList.remove("headerVisible");
      }
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false);
  }
  

