function parallax() {
    var headers = document.querySelectorAll(".header");
    var multiplier = 0.1;
    
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        var distance = elementDistanceFromBottomOfViewport(header);
        header.style.transform = 'translateY(-' + distance*multiplier + 'px)';
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