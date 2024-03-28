 function usingVar(){
    var myName = "Jack";
if(true){
var myName = "Black";
console.log("Inner Block Name :"+myName)
}
console.log("Outer Block Name :"+myName)
}

usingVar();

function usingLet(){
    let myNameLet = "Jack";
if(true){
let myNameLet = "Black";
console.log("Inner Block Name :"+myNameLet)
}
console.log("Outer Block Name :"+myNameLet)
}

usingLet();

function usingConst(){
    const myNameConst = "Jack";
if(true){
const myNameConst = "Black";
console.log("Inner Block Name :"+myNameConst)
}
console.log("Outer Block Name :"+myNameConst)
}

usingConst();