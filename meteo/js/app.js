 new Vue({
    el:'#app',
    data: {
        maVille: "Sainte-Sophie",
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
    },

    methods: {
        getMeteo(){
            console.log(this.dataOk)
            let Promesse = new Promise((resolve, reject) => {
                let url = "https://api.openweathermap.org/data/2.5/weather?q="+this.maVille+"&appid=81d639cffd6cf79af852a51ddb38b020&units=metric&lang=fr"
                const options = {
                    method: 'GET',
                    mode: 'cors',
                }
                
                    fetch(url, options).then(data => {
                        console.log(data.ok)
                        if(data.ok){
                            data.json().then(json =>{
                                resolve(json)
                                console.log("json in promise")
                                console.log(json)
                            })
                        }
                        else{
                            console.log("mauvais nom de ville ou de paramètre: aucun résultat obtenu")
                        }
            
                    }).catch(error=>{
                        console.log("Erreur: requête invalide, impossible d'établir une requête avec l'url fourni")
                        console.log(error)
                    })
                    
        
          })
        
          Promesse.then(json_data=>{
            console.log("json after promise.then")
            console.log(json_data)
            this.temp = Math.round(json_data.main.temp) 
            this.dataOk = true
            console.log(this.dataOk)
          })
          
        }
    },
   mounted(){
        this.getMeteo()
    },
})