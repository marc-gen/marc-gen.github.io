
/**
 * formattedTime  calcule l'heure de levé et couché du soleil de la ville
 * retourne: string = heures et minutes de levé ou couché du soleil
 * @param {json.sys.sunrise} timestamp levé ou coucher en millisecondes par exemple et
 * @param {this.villeTimezone} villeTimezone décalage UTC de la ville en secondes  
 * 
 */
export function formattedTime(timestamp, villeTimezone){        // offset local en millisecondes
    let decalage = timestamp*1000 + villeTimezone*1000 + new Date().getTimezoneOffset()*60*1000
    let date = new Date(decalage)
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    /* let seconds = date.getSeconds(); pas nécessaire */
    if(minutes<10){minutes = "0"+ minutes}
    if(hours<10){hours = "0"+ hours}
    return  hours+":"+minutes
}

/**
 * findCardPoint  
 * retourne: string = la direction du vent en point cardinal
 * @param {this.windDirection} windDirection en degrées (de 0 à 360)
 *  
 */
export function findCardPoint(windDirection){
    if(windDirection == 0){
        return "N"
    }else if(windDirection == 90){
        return "E"
    }else if(windDirection == 180){
        return "S"
    }else if(windDirection == 270){
        return "W"
    }else if(windDirection > 0 && windDirection<90){  //1 à 89
        return "NE"
    }else if(windDirection > 90 && windDirection<180){  //91 à 179
        return "SE"
    }else if(windDirection > 180 && windDirection<270){ // 181 à 269
        return "SW"
    }else if(windDirection > 270 && windDirection<360){ // 271 à 359
        return "NW"
    }
}

/**
 * calculHeuresMinutes
 * retourne: string = l'heure du décalage UTC en heures:minutes
 * @param {this.fuseau} fuseau décalage UTC en heures
 *  
 */
export function calculHeuresMinutes(fuseau){
    let fuseauMinutes = Math.abs((fuseau - Math.trunc(fuseau))*60)//Math.abs car on veut pas min négative(ex:St. John's)
    if(fuseauMinutes<10){fuseauMinutes = "0"+ fuseauMinutes}
    let fuseauHeures =  Math.trunc(fuseau)
    if(fuseauHeures> 0){fuseauHeures = "+"+fuseauHeures}
    return (fuseauHeures+":"+fuseauMinutes)
}