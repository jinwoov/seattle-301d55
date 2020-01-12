'use strict';

const windowColor = () => {
  const win = $(this);
  if (win.width() < 760) {
    $('header').css('background-color', '#ffb2b2')
    $('aside').css('background-color', '#ffd9b2')
    $('#c').css('background-color', '#ffff99')
    $('#d').css('background-color', '#99cc99')
    $('#e').css('background-color', '#9999ff')
    $('#f').css('background-color', '#b799cd')
    $('#g').css('background-color', '#f9d9f9')
    $('#h').css('background-color', '#ffecef')
    $('footer').css('background-color', '#ccffff')
  }
  if (win.width() >= 760) {
    $('header').css('background-color', 'red')
    $('aside').css('background-color', 'orange')
    $('#c').css('background-color', 'yellow')
    $('#d').css('background-color', 'green')
    $('#e').css('background-color', 'blue')
    $('#f').css('background-color', 'indigo')
    $('#g').css('background-color', 'violet')
    $('#h').css('background-color', 'pink')
    $('footer').css('background-color', 'midnightblue')
  }
  if (win.width() >= 1100) {
    $('header').css('background-color', 'midnightblue')
    $('aside').css('background-color', 'pink')
    $('#c').css('background-color', 'violet')
    $('#d').css('background-color', 'indigo')
    $('#e').css('background-color', 'blue')
    $('#f').css('background-color', 'green')
    $('#g').css('background-color', 'yellow')
    $('#h').css('background-color', 'orange')
    $('footer').css('background-color', 'red')
  }
}

$(document).ready(windowColor)
$(window).on('resize', windowColor)
