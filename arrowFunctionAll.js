//Simple Function
function addTwoNumber(a,b){
    return a+b;
}
console.log(addTwoNumber(24,5));


// Function
addTwoNumbers: function add(a,b){
return a+b;
}
console.log(add(4,5));
 
// Simple Arrow Function () => {} Explicet Return

const addNumbers = (a,b) => {
    return a+b; 
}
console.log(addNumbers(2,4));

// Implicet Return One Line Statement ::: {}--> use return , ()--> no return react
const addNumber = (a,b) => (a+b); 
console.log(addNumber(4,7));

//Implicet Object return
let objectReturn = () => ({name:"Parkash"});
console.log(objectReturn()); 


//