myObject = {
    name :"Michle",
    age :"28",
    occupation : "Scientist",
    salary : "23LPA",
};
var detailsArray = ["name","age","occupation","salary"];

function myObjectDetails(){
    for(var i=0;i<detailsArray.length;i++){
console.log(myObject[detailsArray[i]])
    }
}

myObjectDetails();