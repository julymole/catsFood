//@@include('alert.js')

$(document).ready(function () {
$('figure:eq(2)').addClass('disabled');
  $('figure').on('mouseenter', function (event) {
    event.preventDefault();
    if ($(this).hasClass('selected')) {
      $(this).addClass('selectedHover');
    } else if ($(this).hasClass('disabled')) {
      console.log('disabled');
    } else {
      $(this).addClass('defaultHover');
    }
  });
  $('figure').on('mouseleave', function (event) {
    event.preventDefault();
    if ($(this).hasClass('selectedHover')) {
      $(this).removeClass('selectedHover');
    } else if ($(this).hasClass('disabled')) {
      console.log('disabled');
    } else {
      $(this).removeClass('defaultHover');
    }
  });

  $('figure').on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
      $(this).removeClass('selectedHover');
    } else if ($(this).hasClass('disabled')) {
      console.log('disabled');
    } else {
      $(this).removeClass('defaultHover');
      $(this).addClass('selected');

    }
  });
});
