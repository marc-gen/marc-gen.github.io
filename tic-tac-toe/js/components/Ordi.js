import './joueur1.js'
import './joueur2.js'

/****** Le Component Externe jeu c'est la grille de jeu et son fonctionnement  ***********/
        /*   numero des coups(id):   0 | 1 | 2
                                     3 | 4 | 5
                                     6 | 7 | 8   */  

Vue.componentExterne('ordi',{
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

            joueur_ordi: 0, // joueur_ordi = 0 pour ordi avec les O; joueur_odri = 1 pour ordi avec les X 
            compteur_coup_infini:0,   // utilisé par l'ordi pour savoir quand jouer
            
            tableau_coup: [            // tableau d'enregistrement des coups
                null, null, null,      // 0 = O, 1 = X
                null, null, null,
                null, null, null,
            ],
            tableau_coup_jouable: [            // tableau d'enregistrement des coups ouable pour l'ordi
                0, 1, 2,      //exemple on A LE COUP 1 2 ET 3  doit être vidé dans le watch avant utilisation
            ],
            compteur_index_coup: 0,
            coupOrdi:4,
  
        }
    },
    // Notes changer les x et o pour un match null -> oublier lors du travaux
    watch: {
        compteur_coup_infini: function () {
          // when the hash prop changes, this function will be fired.
        /*  if(this.compteur_coup_infini %2 !== 0){
            this.OrdiJouerCoup()
          }*/
        }
     } ,
    methods: {

        // ALTÉRATION POUR COMPUTER: MÉTHODE 1:VOIR MOUNTED  qui part au début de jeu, vois si c'est joueur 2, si oui 
    //     joue aléatoirement sinon rien
    //    MÉTHODE 2 qui part après coup du joueur un et qui joue aléatoirement.


        // joue le coup dans le tableau selon la case clické
        jouerCoup: function(id_coup){
            this.compteur_coup_infini +=1
            if(this.tableau_coup[id_coup] == null && this.le_gagnant == null){  //si c'est jouable
                
                if(this.compteur_coup %2 == 0){         // si le compteur est pair
                    Vue.set(this.tableau_coup, id_coup,1) // jouer un X 
                    this.joueur_actuel = 1               // doit être 1 = x pour l'analyse, l'affichage se fait à l'envers
                    this.compteur_coup +=1
                    this.analyseGagnant(this.joueur_actuel) // passé en paramètre pour alléger les conditions 
                    if(this.joueur_gagnant == null){
                        this.OrdiJouerCoup()
                    }
                }
                else{
                    Vue.set(this.tableau_coup, id_coup,0) // sinon jouer un O 
                    this.joueur_actuel = 0
                    this.compteur_coup +=1
                    this.analyseGagnant(this.joueur_actuel)
                    if(this.joueur_gagnant == null){
                        this.OrdiJouerCoup()
                    }
                }       
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
            if((this.le_gagnant == "X" && this.partie_joueur_1 == "X") ||    
                (this.le_gagnant == "O" && this.partie_joueur_1 == "O")){
                this.compteur_parties += 1
                this.compteur_joueur_1 += 1
                setTimeout(() => {
                    this.joueur_gagnant = "Joueur 1"
                }, 500)
               
            }
            else{
                //----------joueur 2-----------//
                if((this.le_gagnant == "X" && this.partie_joueur_2 == "X") ||    
                    (this.le_gagnant == "O" && this.partie_joueur_2 == "O")){
                    this.compteur_parties += 1
                    this.compteur_joueur_2 += 1
                    setTimeout(() => {
                        this.joueur_gagnant = "Joueur 2"
                    }, 500)                               
                }
            }
            /* pour les parties nuls */
            if(this.compteur_coup >= 9 && this.le_gagnant == null){
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
            if(this.le_gagnant != null || this.partie_nul == true){
                if(this.partie_joueur_1 == "O"){this.partie_joueur_1 = "X"}
                else {this.partie_joueur_1 = "O"}
    
                if(this.partie_joueur_2 == "O"){this.partie_joueur_2 = "X"}
                else{this.partie_joueur_2 = "O"}

                //pour le computer joueur
                if(this.joueur_ordi == 0){this.joueur_ordi = 1}
                else{this.joueur_ordi =0}
            }
            //---- Reset des variables ------//
        
            this.le_gagnant = null
            this.joueur_actuel = null
            this.compteur_coup = 0
            this.partie_nul = false
            this.joueur_gagnant = null

            // jouer le premier coup de l'ordi si il a les x
            if(this.partie_joueur_2 == "X"){
                this.OrdiJouerCoup()
            }
         
    
        },
        OrdiJouerCoup: function(){
            
            this.tableau_coup_jouable = []
            for(let i=0; i<=8;i++){
                if(this.tableau_coup[i] == null){
                    this.tableau_coup_jouable.push(i)
                }             
            }
            this.coupOrdi = this.tableau_coup_jouable[Math.floor(Math.random()*this.tableau_coup_jouable.length)];
            //this.coupOrdi = this.AmelioreCoupOrdi(this.tableau_coup_jouable)
          
            if(this.tableau_coup[this.coupOrdi] == null && this.le_gagnant == null){  //si c'est jouable
                if(this.partie_joueur_2 == "O"){
                    Vue.set(this.tableau_coup, this.coupOrdi,0)
                    this.compteur_coup +=1
                    this.compteur_coup_infini +=1  
                    this.joueur_actuel = 0               // l'affichage se fait à l'envers 
                    this.analyseGagnant(0)
   
                }
                if(this.partie_joueur_2 == "X"){
                    Vue.set(this.tableau_coup, this.coupOrdi,1)
                    this.compteur_coup +=1
                    this.compteur_coup_infini +=1  
                    this.joueur_actuel = 1               //  l'affichage se fait à l'envers
                    this.analyseGagnant(1)
  
                }
            }
        },
     
    },
    template:'componentOrdi.html',

    
})