import './component/ticTacToe.js'
import './component/meteo.js'
new Vue({
    el:'#app',
    data: {
        showId:0,
        detailsdisplay:false,
        compteur:0,
    },

    methods: {
        showDetail: function(id){
            this.showId = id
            this.detailsdisplay = true
            let cards = document.querySelectorAll(".projet-details");
            let compteur_cards = -1
            cards.forEach((card)=>{
                compteur_cards += 1
                if(compteur_cards == id){
                    card.classList.remove("projet-transform-800px"); 
                    card.classList.add("projet-transform-0px"); 
                    if(compteur_cards == 7){
                        console.log("Anime skill!!!!!")
                       // document.addEventListener("DOMContentLoaded", function(){
                            let html_skill = document.querySelectorAll(".html")
                            let css_skill = document.querySelectorAll(".css")
                            let php_skill = document.querySelectorAll(".php")
                            let laravel_skill = document.querySelectorAll(".laravel")
                            let js_skill = document.querySelectorAll(".js")
                            let vue_skill = document.querySelectorAll(".vue")
                            let wordPress_skill = document.querySelectorAll(".wordPress")
                            let jquery_skill = document.querySelectorAll(".jquery")
                            let ps_skill = document.querySelectorAll(".ps")
                            let ai_skill = document.querySelectorAll(".ai")
                            html_skill.forEach(function (html) {
                                html.classList.add('html-level-anim')
                            })
                            css_skill.forEach(function (css) {
                                css.classList.add('css-level-anim')
                            })
                            php_skill.forEach(function (php) {
                                php.classList.add('php-level-anim')
                            })
                            laravel_skill.forEach(function (laravel) {
                                laravel.classList.add('laravel-level-anim')
                            })
                            js_skill.forEach(function (js) {
                                js.classList.add('js-level-anim')
                            })
                            vue_skill.forEach(function (vue) {
                                vue.classList.add('vue-level-anim')
                            })
                            wordPress_skill.forEach(function (wordpress) {
                                wordpress.classList.add('wordPress-level-anim')
                            })
                            jquery_skill.forEach(function (jquery) {
                                jquery.classList.add('jquery-level-anim')
                            })
                            ps_skill.forEach(function (ps) {
                                ps.classList.add('ps-level-anim')
                            })
                            ai_skill.forEach(function (ai) {
                                ai.classList.add('ai-level-anim')
                            })
                            
                          
                       //   }) /**/  highlightedItems.forEach(function (userItem) {
  //deleteUser(userItem);
//}); */
                    } 
                }
                else{
                    card.classList.remove("projet-transform-0px");
                    card.classList.add("projet-transform-800px")
                }
            })

            
      
            
            
            

        },


    },
    created(){
        // mettre la valeur zero et ensuite permettre le display pour évité le glitch de départ"
        this.showId = 0
        let start = document.querySelector(".display-start"); 
        start.style.display = "flex";
     },
})