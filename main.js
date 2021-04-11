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

function setSmileAnimation() {
  const smile = document.getElementById('girl-smile__path')
  smile.classList.add("girl-smile-animation")
}

function tree () {
  const t1 = document.getElementById('t1');
  const t2 = document.getElementById('t2');
  const t3 = document.getElementById('t3');
  const t4 = document.getElementById('t4');
  const t5 = document.getElementById('t5');
  const t6 = document.getElementById('t6');
  const t7 = document.getElementById('t7');
  const b1 = document.getElementById('b1');
  const b2 = document.getElementById('b2');
  const b3 = document.getElementById('b3');
  const b4 = document.getElementById('b4');
  const b5 = document.getElementById('b5');
  const b6 = document.getElementById('b6');
  const g1 = document.getElementById('g1');
  const g2 = document.getElementById('g2');
  const g3 = document.getElementById('g3');
  const g4 = document.getElementById('g4');
  const g5 = document.getElementById('g5');
  const g6 = document.getElementById('g6');

  t1.classList.add("t1");
  t2.classList.add("t2");
  t3.classList.add("t3");
  t4.classList.add("t4");
  t5.classList.add("t5");
  t6.classList.add("t6");
  t7.classList.add("t7");
  b1.classList.add("b1");
  b2.classList.add("b2");
  b3.classList.add("b3");
  b4.classList.add("b4");
  b5.classList.add("b5");
  b6.classList.add("b6");
  g1.classList.add("g1");
  g2.classList.add("g2");
  g3.classList.add("g3");
  g4.classList.add("g4");
  g5.classList.add("g5");
  g6.classList.add("g6");
}
function treeGone () {
  const a1 = document.getElementById('t1');
  const a2 = document.getElementById('t2');
  const a3 = document.getElementById('t3');
  const a4 = document.getElementById('t4');
  const a5 = document.getElementById('t5');
  const a6 = document.getElementById('t6');
  const a7 = document.getElementById('t7');
  const x1 = document.getElementById('b1');
  const x2 = document.getElementById('b2');
  const x3 = document.getElementById('b3');
  const x4 = document.getElementById('b4');
  const x5 = document.getElementById('b5');
  const x6 = document.getElementById('b6');
  const y1 = document.getElementById('g1');
  const y2 = document.getElementById('g2');
  const y3 = document.getElementById('g3');
  const y4 = document.getElementById('g4');
  const y5 = document.getElementById('g5');
  const y6 = document.getElementById('g6');

  a1.classList.add("treeGone");
  a2.classList.add("treeGone");
  a3.classList.add("treeGone");
  a4.classList.add("treeGone");
  a5.classList.add("treeGone");
  a6.classList.add("treeGone");
  a7.classList.add("treeGone");
  x1.classList.add("treeGone");
  x2.classList.add("treeGone");
  x3.classList.add("treeGone");
  x4.classList.add("treeGone");
  x5.classList.add("treeGone");
  x6.classList.add("treeGone");
  y1.classList.add("treeGone");
  y2.classList.add("treeGone");
  y3.classList.add("treeGone");
  y4.classList.add("treeGone");
  y5.classList.add("treeGone");
  y6.classList.add("treeGone");
}