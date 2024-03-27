function convertSecondsToMinutes(seconds){
    var minutes = seconds/60;
    return minutes;
}

function convertMinutesToHours(minutes){
    var hours = minutes/60;
    return hours;
}

function convertSecondsToHoursAndMinutes(seconds){
var minutes = seconds/60;
var hours = minutes/60;
var hoursOnly = Math.floor(hours);
var minutesNotFinal = (hours - hoursOnly)*60;
var minutesOnly = Math.floor(minutesNotFinal);
var secondsNotFinal = (minutesNotFinal-minutesOnly) * 60; 
var secondsOnly = Math.floor(secondsNotFinal);
console.log(hoursOnly+" Hour :"+minutesOnly+ " Minute :"+secondsOnly+" Second");
}

console.log(convertMinutesToHours(convertSecondsToMinutes(5268))+" hours");
convertSecondsToHoursAndMinutes(5268);
