$(document).ready(function () {

  $(window).on('scroll', function () {

    if ($(this).scrollTop() > 100) {

      $('.navbar').addClass('bg-black-transparent')

    } else {

      $('.navbar').removeClass('bg-black-transparent')

    }//end of else

  });//end of window scroll

});//end of document ready
