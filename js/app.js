import './components/Jeu.js'
/* Vue #app gère le lancement de partie et les messages  */
new Vue({
    el:'#app',
    data: {
        jouer: false,  // Vrai = lancer partie
        coup: null,     // enregistrement du dernier coup NON UTILISÉ POUR L'INSTANT
    },

    methods: {
        lancer_partie: function(){
            this.jouer = true
        },
    },
})