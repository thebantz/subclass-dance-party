$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 750
    );
    $('body').append(dancer.$node);
  });

 ////////////////////////////////

  $('.addExpandDancerBtn').on('click', function(event) {

    var dancerMakerFunctionName = $('span.dancer').addClass('animated bounce infinite delay-1s');

  });

});