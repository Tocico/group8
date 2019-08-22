
anime({
    targets: '#mars',
    rotate: '2turn',
    easing: 'linear',
    loop:true,
    duration: 30000,
});

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

anime({
  targets: "#earth",
  translateX: [800,100],
  rotate: '3turn',
  scale: 1.3,
  easing: 'easeInOutQuart',
  duration: 4000,
  direction: 'alternate',
  loop: true
})

/* Parallax*/
function parallax() {
    let planets = document.querySelectorAll(".planets");
    var multiplier = 0.9;
    
    planets.forEach(function(planet) {
      if (isElementInViewport(planet)) {
        let distance = elementDistanceFromBottomOfViewport(planet);
        console.log(distance*multiplier);
        planet.style.transform = `translateX(-${distance*multiplier}px)`;
        anime({
          targets: '#mars',
          rotate: `${10*multiplier}turn`,
          easing: 'linear',
          loop:true,
          duration: 30000,
      });
    var multiplier = 0.2;

    
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        var distance = elementDistanceFromBottomOfViewport(header);
        header.style.transform = "translateY(-" + distance*multiplier + "px)";
      }
    });
  }
  
  function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();
  
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
  

  var textWrapper = document.querySelector('.h1title');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.h1title .letter',
      translateY: [-100,0],
      translateX: [90,0],
      easing: "easeOutCubic",
      duration: 1400,
      delay: function(el, i) {
        return 100 * i;
      }
    }).add({
      targets: '.h1title',
      opacity: 0,
      duration: 1000,
      easing: "easeOutCubic",
      delay: 1000
    });


/* stars */
var path = anime.path('ellipse');

var easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];

var motionPath = anime({
  targets: '.star',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: function (el, i) {
    return easings[i];
  },
  duration: 9000,
//   delay: function(el, i){
//       return 100 * i
//   },
  loop: true
})})}
