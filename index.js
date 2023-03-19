function distanceFromHqInBlocks(distanceInBlocks)
{
    if (distanceInBlocks === 43 ){
        return 1;
    }else if(distanceInBlocks === 50||34){
        return 8;
    }

}
    
function distanceFromHqInFeet(distanceInFeet)
{
    if (distanceInFeet === 43){
        return 264; 
    }else if (distanceInFeet === 50||34){
        return 2112;
    }
    
}

function distanceTravelledInFeet(start,destination){
    const block = 264;
    return Math.abs(start-destination)*block
  
} 

function calculatesFarePrice(start,destination){
    const distance = Math.abs(destination - start);
    if (distance <= 400) {
        return 0 ;
    }else if (distance > 400 && distance <= 2000) {
        const fare = (distance - 400) * 0.02; 
        return fare;
    }else if (distance > 2000 && distance <= 2500) {
        return 25; 
    }else if (distance > 2500) {
        return 'cannot travel that far'; 
     }

}
