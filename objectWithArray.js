var myObject = [{
    name :"Michle",
    age :"28",
    occupation : "Scientist",
    salary : "23LPA",
},{ 
   name :"Jake",
   age :"32",
   occupation : "Sr .Scientist",
   salary : "30LPA",
},
{ 
    name :"Ken",
    occupation : "Head Scientist",
 }
];
var detailsArray = ["name","age","occupation","salary"];

function myObjectDetails(){
    for(var i=0;i<myObject.length;i++){
        console.log(" ");
        for(var j=0;j<detailsArray.length;j++){
            console.log(myObject[i][detailsArray[j]]);
        }
    }
}


myObjectDetails();