$(document).ready(function() {

  // smooth scrolling
  $('.anchor-link').on('click', function() {
    var scrollTop = $(this.hash).offset().top;

    $('html,body').animate({
      scrollTop: scrollTop
    }, 1000);
    return false;
  });

});
