function distanceFromHqInBlocks(location){
//return when pick up location is larger than 42
if (location > 42){
return location - 42 } ;


// When pick up location is smaller than 42
if (location < 42) {
return 42 - location}
};

function distanceFromHqInFeet(location){
//return distance in feet 
if (location > 42) {
    return (location - 42) * 264
}
if (location < 42) {
return (42 - location) * 264
}
}
function distanceTravelledInFeet(locationOne, locationTwo) {
if (locationOne > 42 && locationTwo > 42) {
    return (locationTwo - locationOne) * 264; 
}
else if (locationOne < 42 && locationTwo < 42) {
    return (locationOne - locationTwo) * 264;
}
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
   }
   else if (distance >= 400 && distance <= 2000) {
   return (distance - 400) * 0.02;
}
else if (distance >= 2000 && distance < 2500) {
return 25;
}
else if (distance > 2500)
return "cannot travel that far";
}
