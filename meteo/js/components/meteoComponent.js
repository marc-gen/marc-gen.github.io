
import { formattedTime, findCardPoint, calculHeuresMinutes } from "../components/utils/meteoCalcul.js";
Vue.componentExterne('meteocomponent',{
    props: {
        ma_ville: String,
    },
    data: function() {
        return{        
            newville: this.ma_ville,
            temp: "",
            feels:"",
            description:"",
            icon:"",
            iconId:"",
            windSpeed:"",
            windDirection:"",
            cardPoint:"",
            fuseauHeures:"",
            fuseauMinutes:"",
            sunrise:"",
            sunset:"",
            snow:"0",
            rain:"0",
            localTimezone:"",
            villeTimezone:"",
            fuseau:"",
            dataOk:false,
            renderKey:0,
        }
    },
  /*  watch: {
        // whenever question changes, this function will run
        newville() {
            this.getNewVille()
        }
      },*/
    methods: {
   /*      getNewVille(){
          //  console.log(this.newville)
        },*/
     /*   setNewValue() {
            this.getMeteo(this.maVille)
         },*/
         getMeteo(ville){
          
            let Promesse = new Promise((resolve, reject) => {
                let url = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=81d639cffd6cf79af852a51ddb38b020&units=metric&lang=fr"
                const options = {
                    method: 'GET',
                    mode: 'cors',
                }
                
                    fetch(url, options).then(data => {
                        console.log(data.ok)
                        if(data.ok){
                            data.json().then(json =>{
                                resolve(json)
                
                            })
                        }
                        else{
                  
                        }
            
                    }).catch(error=>{
    
                    })
                    
        
          })

          Promesse.then(json_data=>{
            this.temp = Math.round(json_data.main.temp)
            this.feels = Math.round(json_data.main.feels_like)

            this.description = json_data.weather[0].description
            this.description = this.description.charAt(0).toUpperCase() + this.description.slice(1)

            this.iconId = json_data.weather[0].icon
            this.icon = "http://openweathermap.org/img/wn/"+this.iconId+"@2x.png"

            this.windSpeed = Math.round(json_data.wind.speed*3600/1000) // *3600(donne en heure) / 1000(pour en kilomètre)
            this.windDirection = json_data.wind.deg
            this.cardPoint = findCardPoint(this.windDirection)

            this.villeTimezone = json_data.timezone
            this.fuseau = json_data.timezone/3600  //fuseau en heures ex:5.5heures
            if(Math.trunc(this.fuseau)!=json_data.timezone){ //si fraction
                this.fuseau = calculHeuresMinutes(this.fuseau)
            }

            this.sunrise = formattedTime(json_data.sys.sunrise, this.villeTimezone) 
            this.sunset = formattedTime(json_data.sys.sunset, this.villeTimezone)

            this.dataOk = true
            console.log(json_data)
          })
          
        }
    

         //fin method
        },
   created(){
     //   this.getMeteo(this.maVille)
    },
    mounted(){
       console.log(this.newville)
       this.getMeteo(this.newville)
    },
    template:'meteoComponent.html'
})