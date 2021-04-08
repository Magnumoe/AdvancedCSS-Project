window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
//Change colors on scroll
$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.slide')
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        $this.find('.slide__text--paragraph').removeClass("animation-typist"); 
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
        $this.find('.slide__text--paragraph').addClass('animation-' + $(this).data('animation'))
      }
    });    
    
  }).scroll();


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    //Preventing fast clicking
    $('a').each(function (){
        this.style.pointerEvents = 'none'; 
    });

    var fadeTarget = $('.fa-angle-double-down');
    $('.slide').addClass('zoom');
    $(fadeTarget).addClass('fade');
    

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      setTimeout(function(){
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      },800)
      
    } // End if
    setTimeout(function() {
      $('.slide').removeClass('zoom');
      setTimeout(function(){
        $(fadeTarget).removeClass('fade');
        //Re-enable arrow click
        $('a').each(function (){
            this.style.pointerEvents = 'auto';
        }); 
      },2500);
    }, 3000);
  });
});