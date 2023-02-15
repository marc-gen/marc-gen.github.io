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

});
