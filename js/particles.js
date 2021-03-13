(function() {

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var particles = 5, // max visible particles at any given moment
    particleLife = 2500, // in ms
    colors = ['FFBA4A', 'FF9D48', 'FF7255', 'FF497E', 'E5348A', 'F962B7', 'E5348A'],
    $confetti = $('<div/>');

  $confetti
    .appendTo('body')
    .css({
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0,
      'overflow': 'hidden',
      'position': 'absolute',
      'z-index': -1
    });

  setInterval(function() {
    $confetti.find('div:hidden').remove();

    var dimensions = Math.random() < .8 ? 6 : 12,
      minTop = $(window).scrollTop();

    $('<div/>')
      .appendTo($confetti)
      .css({
        'top': randomNum(minTop, minTop + $(window).height()) + 'px',
        'left': Math.round(Math.random() * 100) + '%',
        'background-color': '#' + colors[Math.round(Math.random() * colors.length)],
        'position': 'absolute',
        'border-radius': '100%'
      })
      .animate({
        'height': dimensions + 'px',
        'width': dimensions + 'px',
        'margin': '-' + dimensions / 2 + 'px'
      }, 250)
      .animate({
        'top': '-=100px',
        'left': '-=100px'
      }, particleLife, 'linear')
      .animate({
        'height': 0,
        'width': 0,
        'margin': 0
      }, 250)
      .hide(0);

  }, particleLife / particles);

})();