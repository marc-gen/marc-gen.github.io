import './components/Jeu.js'
import './components/Ordi.js'
/* Vue #app gère le lancement de partie et les messages  */
new Vue({
    el:'#app',
    data: {
        jouer: false,  // Vrai = lancer partie
        coup: null,     // enregistrement du dernier coup NON UTILISÉ POUR L'INSTANT
        computer: false,
    },

    methods: {
        lancer_partie: function(){
            this.jouer = true
        },
        lancer_partie_computer: function(){
            this.jouer = false
            this.computer = true
        },
    },
})