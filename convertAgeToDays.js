function calculateDays(age){
let days =  age * 365; 
let leapYearDays = Math.floor(age/4);
let finalDays = days + leapYearDays ;
console.log(finalDays);
}

calculateDays(25);