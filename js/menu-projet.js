//   section menu on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() <= 0) {
      $(".navbar").removeClass( "menu-scroll-bg" );
    }
    if ($(window).scrollTop() > 0) {
      $(".navbar").addClass( "menu-scroll-bg" );
    }
  });


  // mouse follower

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/1);
$yp += (($mouseY - $yp)/1);
$("#follower").css({left:$xp +'px', top:$yp +'px'});  
}, 30);


$(".phone-icon, .mail-icon, .card").each(function(){
  $(this).hover(function(){
                            $("#follower").css({display:'none'});       
                          }, function(){
    $("#follower").css({display:'block'}); 
  })
})