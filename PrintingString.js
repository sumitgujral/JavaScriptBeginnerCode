var firstString = "Hi";
var secondString = ",";
var thirdString = "My";
var fourthString = "name";
var fifthString = "is";
var sixthString = "";
var seventhString = ".";

var names = ["Max","Issac","Pinaco","Gwen","Shukha"];

function concateString(){
    for(var i=0;i<names.length;i++){
        sixthString = names[i];
        console.log(firstString+""+secondString+" "+thirdString+" "+fourthString+" "+fifthString+" "+sixthString+""+seventhString);
    }  
}
concateString();