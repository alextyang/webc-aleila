
anime({
  targets: 'div#loadProgress',
  translateX: 400,
  easing: 'easeInQuad',
  duration: 4000,
  complete: function(anim) {
    window.location.href = './pg/store.html'
  }
});
