import './joueur1.js'
import './joueur2.js'

/****** Le Component Externe jeu c'est la grille de jeu et son fonctionnement  ***********/
        /*   numero des coups(id):   0 | 1 | 2
                                     3 | 4 | 5
                                     6 | 7 | 8   */  

Vue.componentExterne('jeu',{
    data: function() {
        return{                    /*  UTILITÉ DES VARIABLES */
            joueur_gagnant: null,  // Pour afficher le joueur qui a gagné
            partie_nul: false,    // Vrai affiche Partie NULL
           
            partie_joueur_1: "X",  // symbole du joueur pour la partie
            partie_joueur_2: "O",  

            compteur_joueur_1: 0,  // les compteurs de victoires
            compteur_joueur_2: 0,
            compteur_parties: 0,   // pour déterminer si le joueur 1 ou 2 gagne (utilisation %2)
       
            le_gagnant: null,    // null X O
            joueur_actuel: null,    // informer analyseGagnant si on analyse les X ou les O (1=x,0=O)
            compteur_coup: 0,   //savoir si un X ou un O vient d'être joué (utilisation %2)
            
            tableau_coup: [            // tableau d'enregistrement des coups
                null, null, null,      // 0 = O, 1 = X
                null, null, null,
                null, null, null,
            ],
  
        }
    },
    methods: {
        // joue le coup dans le tableau selon la case clické
        jouerCoup: function(id_coup){
            if(this.tableau_coup[id_coup] == null && this.le_gagnant == null){  //si c'est jouable
                
                if(this.compteur_coup %2 == 0){         // si le compteur est pair
                    Vue.set(this.tableau_coup, id_coup,1) // jouer un X 
                    this.joueur_actuel = 1
                    this.analyseGagnant(this.joueur_actuel) // passé en paramètre pour alléger les conditions 
                }
                else{
                    Vue.set(this.tableau_coup, id_coup,0) // sinon jouer un O 
                    this.joueur_actuel = 0
                    this.analyseGagnant(this.joueur_actuel)
                }
                this.compteur_coup +=1
            }
        },

        //**** déterminer s'il y a un gagnant */
        analyseGagnant: function(le_joueur){
            //** les 3 horizontales */
            if(this.tableau_coup[0]== le_joueur 
                && this.tableau_coup[1]== le_joueur 
                && this.tableau_coup[2] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
              
            }
            if(this.tableau_coup[3]== le_joueur 
                && this.tableau_coup[4]== le_joueur 
                && this.tableau_coup[5] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
            }
            if(this.tableau_coup[6]== le_joueur 
                && this.tableau_coup[7]== le_joueur 
                && this.tableau_coup[8] == le_joueur){
                if(le_joueur == 1){
                    this.le_gagnant = "X"
                }else{
                    this.le_gagnant = "O"
                }
            }
            //**Les 3 verticales */
            if(this.tableau_coup[0]== le_joueur 
                && this.tableau_coup[3]== le_joueur 
                && this.tableau_coup[6] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
            }
            if(this.tableau_coup[1]== le_joueur 
                && this.tableau_coup[4]== le_joueur 
                && this.tableau_coup[7] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
            }
            if(this.tableau_coup[2]== le_joueur 
                && this.tableau_coup[5]== le_joueur 
                && this.tableau_coup[8] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
            }
            //**Les 2 diagonales */
            if(this.tableau_coup[0]== le_joueur 
                && this.tableau_coup[4]== le_joueur 
                && this.tableau_coup[8] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
            }
            if(this.tableau_coup[2]== le_joueur 
                && this.tableau_coup[4]== le_joueur 
                && this.tableau_coup[6] == le_joueur){
                    if(le_joueur == 1){
                        this.le_gagnant = "X"
                    }else{
                        this.le_gagnant = "O"
                    }
            }

            //-------------section comptage de parties et victoires------//
          
            //----------joueur 1-----------//
            if((this.le_gagnant == "X" && this.compteur_parties %2 == 0) ||    
                (this.le_gagnant == "O" && this.compteur_parties %2 != 0)){
                this.compteur_parties += 1
                this.compteur_joueur_1 += 1
                setTimeout(() => {
                    this.joueur_gagnant = "Joueur 1"
                }, 500)
               
            }
            else{
                //----------joueur 2-----------//
                if((this.le_gagnant == "O" && this.compteur_parties %2 == 0 ) || 
                    (this.le_gagnant == "X" && this.compteur_parties %2 != 0)){
                    this.compteur_parties += 1
                    this.compteur_joueur_2 += 1
                    setTimeout(() => {
                        this.joueur_gagnant = "Joueur 2"
                    }, 500)                               
                }
            }
            /* pour les parties nuls */
            if(this.compteur_coup == 8 && this.le_gagnant == null){
                setTimeout(() => {
                    this.partie_nul = true
                }, 500)   
               
            }


        },
        
        rejouer_partie: function(){
            for(let i=0; this.tableau_coup[i]<=8; i++){  /* reset du tableau */
                Vue.set(this.tableau_coup, i, null )
            }     
            /* S'il y a un gagnant, on change le symbole du joueur pour la partie suivante */
            if(this.le_gagnant != null){
                if(this.partie_joueur_1 == "O"){this.partie_joueur_1 = "X"}
                else {this.partie_joueur_1 = "O"}
    
                if(this.partie_joueur_2 == "O"){this.partie_joueur_2 = "X"}
                else{this.partie_joueur_2 = "O"}
            }
            //---- Reset des variables ------//
        
            this.le_gagnant = null
            this.joueur_actuel = null
            this.compteur_coup = 0
            this.partie_nul = false
            this.joueur_gagnant = null
         
    
        },      
    },
    template:'componentJeu.html'
})