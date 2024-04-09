const pi = 3.14;
// let side = a;
// let length  = l;
// let width = w;
// let radius = r;
// let heigth = h;
// let base = b;
// let smallSide = x;
// let largeSide = y;
// let slantHeight = sh;




var Area = {
square:function(a){
    return a*a;
},


rectangle:function(l,w){
    return l*w;
}
,
traingle:function(b,h){
    return 1/2*(b*h);
}
,
circle:function(r){
    return pi*r*r;
}
,
parallelogram:function(b,h){
    return b*h;
}
,
trapezium:function(x,y,h){
    return 1/2*(x*y)*h;
}
,
ellipse:function(x,y){
    return pi*x*y;
}
,
spher:function(r){
    return 4*pi*(r*r);
}
,
cube:function(a){
    return 6*(a*a);
}
,
rectangularPrism:function(w,l,h){
    return 2*(w*l+h*l+h*w);
}
,
cylinder:function(r,h){
    return 2*pi*r*(r + h);
}
,
cone:function(r,sh){
    return pi*r*(r + sh);
}
,
hemisphere:function(r){
    return 3*pi*r*r;	
}}


console.log(Area.traingle(20,35)+ "Meter");
