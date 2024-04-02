var defaultFunction = (function(){
return function defaultFunction(name,ifNoData= "default"){
 return name + ifNoData ;
};
})();

console.log(defaultFunction("Hi ","Mkoe"));
console.log(defaultFunction("Hi "));
