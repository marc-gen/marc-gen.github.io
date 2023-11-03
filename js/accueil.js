
//---------------------------------------------- mouse follower-------------------------------

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
//-------------------------------------------------------------------------------------------- 
  
  
  //  image d'ordinateur à faire apparaître lorsque l'élément est visible      
  //  ici ordi orange et big ordi

  document.addEventListener("DOMContentLoaded", function(){
      let ordi_orange = document.querySelector(".ordi-dessin")
      let info_conteneur = document.querySelector(".info-conteneur")
      
      const observer_2 = new IntersectionObserver(e=>{
          if(e[0].isIntersecting == true){
            ordi_orange.classList.add('ordi-dessin-anim')
          }
      }
      )
      observer_2.observe(info_conteneur)

      //ici les skills (animation on scroll)
      let anchor_skill_anim = document.querySelector("#anchor-skill-anim")
      let html_skill = document.querySelector(".html")
      let css_skill = document.querySelector(".css")
      let php_skill = document.querySelector(".php")
      let laravel_skill = document.querySelector(".laravel")
      let js_skill = document.querySelector(".js")
      let vue_skill = document.querySelector(".vue")
      let wordPress_skill = document.querySelector(".wordPress")
      let jquery_skill = document.querySelector(".jquery")
      let ps_skill = document.querySelector(".ps")
      let ai_skill = document.querySelector(".ai")
      const observer_3 = new IntersectionObserver(e=>{
          if(e[0].isIntersecting == true){
            html_skill.classList.add('html-level-anim')
            css_skill.classList.add('css-level-anim')
            php_skill.classList.add('php-level-anim')
            laravel_skill.classList.add('laravel-level-anim')
            js_skill.classList.add('js-level-anim')
            vue_skill.classList.add('wordPress-level-anim')
            wordPress_skill.classList.add('html-level-anim')
            jquery_skill.classList.add('jquery-level-anim')
            ps_skill.classList.add('ps-level-anim')
            ai_skill.classList.add('ai-level-anim')
          }
      }
      )
      observer_3.observe(anchor_skill_anim)

    //----------------------------- RANDOM COLOR des banner-2 --------------------------------(255-200)+200-----------//
    var banner_top = document.querySelector('.banner-2'); 
    var banner_exp = document.querySelector('.experience-container');
    var diviseur_about = document.querySelector('.xp-like-bg'); 
    setInterval(function() {banner_top.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)/*.toString(16)*/ + "," + Math.floor(Math.random() * 255)+"," + Math.floor(Math.random() * 255)+")";}, 10000);
    setInterval(function() {
       let random_color_bg_xp = "rgb(" + Math.floor(Math.random() * (255-200)+200)/*.toString(16)*/ + "," + Math.floor(Math.random() * (255-200)+200)+"," + Math.floor(Math.random() * (255-200)+200)+")";
       banner_exp.style.backgroundColor = random_color_bg_xp
       diviseur_about.style.backgroundColor = random_color_bg_xp
    }, 10000);
  });

  
  //--------------------------   JQUERY MENU ON SCROLL ------------------------------------ //
$(document).ready(function() {
  //   section menu on scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() <= 100) {
      $(".navbar").removeClass( "menu-scroll-bg" );
    }
    if ($(window).scrollTop() > 100) {
      $(".navbar").addClass( "menu-scroll-bg" );
    }
  });

  //------background contact on hover icon and remove the glitch of follwing mouse on over button----//
  $(".phone-icon, .mail-icon").each(function(){
      $(this).hover(function(){$(".contact").css("opacity", "40%");
                                $("#follower").css({display:'none'});       
                              }, function(){
        $(".contact").css("opacity", "35%");
        $("#follower").css({display:'block'}); 
      })
  })
    //background contact on hover icon and remove the glitch of follwing mouse on over button
    $("#anchor-experience").hover(function(){
                                $("#follower").css({display:'none'});       
                              }, function(){

        $("#follower").css({display:'block'}); 
      })
  
})

//------------- Megamenu appear and disapear when hover on portfolio or the megamenu -------------------//
$(document).ready(function() {
  $(".portfolio").hover(function(){     
                        $(".megamenu").addClass( "mega-menu-visible" );
                      },
  )
  $(".remove-megamenu").each(function(){
    $( this ).hover(function(){
      $(".megamenu").removeClass( "mega-menu-visible" );
    })
  })



  // -----------------      Arrow dropdown--------------------------------------------/
  var arrow = $(".img-arrow-dropdown");
  var dropdown = $(".dropdown-menu");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    /*  var attributeValue = $(mutation.target).prop(mutation.attributeName);  = show ou  dropdown-menu show   */
     arrow.toggleClass("rotation-down")
    /*POUR AVOIR MEGAMENU LIER AU DROPDOWN  $(".megamenu").toggleClass( "mega-menu-visible" );*/
    });
  });
  
  observer.observe(dropdown[0], {
    attributes: true,
    attributeFilter: ['class']
  });
  
  //-----------------------------------------------------------------------------------//

})












