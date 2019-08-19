let target = document.getElementById('animation-target');
anime({
  targets: target,
  translateX: 300
});

let animationText = document.getElementById('animation-text');
let wordarray = animationText.innerText.split(' ');
let newp = '';
let animatable = true;
wordarray.forEach(word => {
  newp += `<div>${word}</div> `;
});
animationText.innerHTML = newp;
let spans = document.querySelectorAll('#animation-text div');
function startAnimation(){
    let delay = 0;
    spans.forEach(span => {
      animateUpDown(span, delay);
      delay += 100;
    });
}
startAnimation();
setInterval(startAnimation, 120*wordarray.length);

function animateUpDown(span, delay){
  anime({
    targets: span,
    delay: delay,
    translateY: -10,
    easing: 'linear',
    duration: 100
  });
  setTimeout( () => {
    anime({
      targets: span,
      delay: 60,
      translateY: 0,
      easing: 'linear',
      duration: 100
    });
  }, 60+delay);
}
