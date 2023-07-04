class Circle{
   constructor(radius,color){
    this.radius=radius;
    this.color=color;

  }
  getRadius(){
    return this.radius;
  }
  set changeradius(radiusname){
    this.radius=radiusname;
  }
  getcolor(){
    return this.color;
  }
  set changecolor(colorname){
    this.color=colorname;
  }
  getArea(){
    return Math.PI * this.radius * this.radius;
  }
  getCircumference(){
    return 2 * Math.PI * this.radius;
  }
  toString(){
    return "Radius: "+this.radius+ ", Color: "+this.color+"."
  }
 
}
var cir=new Circle(3,"red");
console.log(cir.getArea().toFixed(2));//28.27
console.log(cir.getCircumference().toFixed(2));//18.85
console.log(cir.getRadius());//3
cir.changeradius=4;
console.log(cir.getRadius());//4
console.log(cir.getcolor());//red
cir.changecolor="yellow";
console.log(cir.getcolor());//yellow
console.log(cir.toString());//Radius: 4, color: yellow