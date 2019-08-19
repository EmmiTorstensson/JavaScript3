var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 250 },
    direction: 'linear',
    loop: true
  });

  const myAnimation = anime({
      targets: '.myImg',
      scale: 60,
      duration: 3000,
      delay: function(el, i) { return i * 250 },    
      direction: 'alternate',
      easing: 'linear',
      loop: true,
  })

  var textWrapper = document.querySelector('.myText');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  const textAnimation = anime.timeline({loop: true})

  .add({
    targets: '.myText .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function(el, i) {
      return 300 + 30 * i;
    }
  }).add({
    targets: '.myText .letter',
    translateX: [ 0, 1000],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });
