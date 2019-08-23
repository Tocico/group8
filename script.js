anime({
  translateX: {
    value: -400,
    duration: 1000,
    easing: 'easeOutQuint',
  },
    targets: '#mars',
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInOutSine',
    },
    scale: {
      value: 2.5,
      duration: 3000,
      delay: 2000,
      easing: 'easeInOutBounce'
    },
    delay: 500,
    direction: 'alternate',
    loop: true,
});

anime({
  targets: "#venus",
  translateX: [-300,400],
  translateY: [0,-500],
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
    let title = document.querySelectorAll(".title");
    var multiplier = 0.05;

    
    title.forEach(function(header) {
      if (isElementInViewport(header)) {
        var distance = elementDistanceFromBottomOfViewport(header);
        header.style.transform = "translateY(-" + distance*multiplier + "px)";
      }
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
        rect.top + (rect.height)/2 < window.innerHeight
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

  /* Sub title animation */
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

  /* Main title animation */
  function titleActivity(){
    let h1title = document.querySelectorAll(".h1title");

    h1title.forEach(function(h1title){
      if(isElementInViewport(h1title)){
        h1title.innerHTML = h1title.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.h1title .letter',
            translateY: [-100,0],
            translateX: [90,0],
            easing: "easeOutCubic",
            duration: 1400,
            delay: function(el, i) {
              return 100 * i;
            }
          });
      }
    })
    
  }
  
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top + (rect.height)/2 < window.innerHeight
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false);
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', titleActivity, false); 
    addEventListener('load', titleActivity, false);
    addEventListener('scroll', titleActivity, false);
  }
  


/* Sun */
anime({
    targets: '#sun',
    loop: true,
    duration: 10000,
    translateY: [-30,20],
    translateX: [-50,40],
    direction:'alternate',
    translateX: 100,
    easing: 'easeInOutCubic',
    })

/* Rocket*/
anime({
    targets: '#rocket',
    loop: true,
    duration: 9000,
    translateX: [-1000,600],
    translateY: [700,-500],
    scale: 2,
    easing: 'easeInOutSine',
    })

/* Shooting star */
  anime({
    targets: '.shootingstar',
    loop: true,
    delay: 100,
    translateX: [40,-500],
    translateY: [-100,600], 
    duration: 5000, 
    keyframes: [
      {opacity: 1 , scale: 2},
    ],
    opacity: 0,
    easing: 'easeInSine',
  })
  
/* star background */
 let stars = document.createElement('div');
 stars.className = 'stars';
 console.log(stars);
 for(let i = 0; i< 100; i++){
    getStar(stars);

}
function getStar(stars){
  let starClone = stars.cloneNode(true);
  let starStyle = starClone.style;
  starStyle.right = 100 * Math.random() + '%';
  starStyle.left = 100 * Math.random() + '%';
  starStyle.top = 100 * Math.random() + '%';
  
  document.body.appendChild(starClone);

 
}
