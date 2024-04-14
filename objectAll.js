//Simple Object
 const obj1 = {
    name: "Krish",
    age: 26,
    gender: "M"
}
 console.log(obj1.name);

 //Nested Object

 const obj2 = {
    user1:{
    name: "Krish",
    age: 26,
    gender: "M"
},
user2:{
    name: "Mayank",
    age: 32,
    gender: "M"
}
}
console.log(obj2.user2.age);


//Object Array

const obj3 = [{
    
    name: "Krish",
    age: 26,
    gender: "M"
},{
    name: "Mayank",
    age: 32,
    gender: "M"

}]
console.log(obj3[1].name);

//Object Functions

const obj4 = {
    name: "Krish",
    age: 26,
    gender: "M",
    AddTwoNumber: function(a,b){
        return a+b;
    }
}
console.log(obj4.AddTwoNumber(8,3));

