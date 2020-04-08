$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container',{
        // Autoplay parameters
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    // SmoothScroll
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });  

    // Parallax
    $(document).ready(function(){

      var currentOffsetO =  1;
      var currentOffsetI =  1;
      var currentOffsetB =  0;
      var currentOffset =  $('.scrolled').offset().top;
 
        $(window).scroll(function(){
            var mainTop = window.pageYOffset;
            var posicionO =  currentOffsetO - (mainTop * 0.003);
            var posicionI =  currentOffsetI - (mainTop * 0.002);
            var posicionB =  (mainTop * 0.2) + currentOffsetB;
            var posicion =  (mainTop * 0.4) + currentOffset;
            topPosicion = posicion;
            

            $('.hero').css({
                'background-position': '0 -' + posicionB + 'px'
            });
            $('.banner-wrap, .banner-container .scrolled').css({
                'opacity': posicionO
            });
            $('.banner-img img').css({
                'opacity': posicionO
            });
            // $('.scrolled').offset({top: topPosicion, left: 'currentoffset'});
    
        });
     
    });
    
    // Dropdown
    $('#menuButton').click(function() {
      $('#navbar').toggleClass('darken');
    });
});

