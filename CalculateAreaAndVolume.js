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




var Area = [{
square:function(a){
    return a*a;
}
},{

rectangle:function areaOfRectangle(l,w){
    return l*w;
}
},{
traingle:function areaOfTriangle(b,h){
    return 1/2*(b*h);
}
},{
circle:function areaOfCircle(r){
    return pi*r*r;
}
},{
parallelogram:function areaOfParallelogram(b,h){
    return b*h;
}
},{
trapezium:function areaOfTrapezium(x,y,h){
    return 1/2*(x*y)*h;
}
},{
ellipse:function areaOfEllipse(x,y){
    return pi*x*y;
}
},{
spher:function areaOfSpher(r){
    return 4*pi*(r*r);
}
},{
cube:function areaOfCube(a){
    return 6*(a*a);
}
},{
rectangularPrism:function areaOfRectangularPrism(w,l,h){
    return 2*(w*l+h*l+h*w);
}
},{
cylinder:function areaOfCylinder(r,h){
    return 2*pi*r*(r + h);
}
},{
cone:function areaOfCone(r,sh){
    return pi*r*(r + sh);
}
},{
hemisphere:function areaOfHemisphere(r){
    return 3*pi*r*r;	
}}
]

Area.square.call(6);