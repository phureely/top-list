
// // fullpage
// $(document).ready(function() {

//     //initialising fullpage.js in the jQuery way
//     $('#fullpage').fullpage({

//         navigation: true,

//         slidesNavigation: true,

//     });




$(document).ready(function() {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function() {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function() {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });
});



// hover service
$(".img-service").mouseenter(function() {
    $(this).addClass("active");
})
$(".img-service").mouseleave(function() {
    $(this).removeClass("active");
})


/*Star-rating*/
$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    
  });
  
  
});
/**/
jQuery(document).ready(function($) {
    $('.header-menu button.navbar-toggler').click(function(event) {
          $('.menu-header').slideToggle('fast').css({
              display: 'block!important'          });;  
    });
    
});
/**/
$('.apartment-carousel').owlCarousel({
  loop:false,
  margin:15,
  nav:false,
  navText:["prev","next"],
  dots:true,
  dotsEach:true,
    // center: true,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      600:{
        items:2
      },
      1000:{
        items:3
      },
      1025:{
        items:3
      },
      1400:{
        items:4
      }
    }
  });

$( document ).ready(function() {
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "fast", function() {


        });
    });

});
