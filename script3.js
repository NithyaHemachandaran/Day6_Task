class Person{
  constructor(name,age,gender,state,country){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.state=state;
    this.country=country;
    
  }
  getname(){
      return "Hi "+this.name+" your from "+this.country+"!!!";
  }
  set changeCountry(modifiedcountry){
    this . country=modifiedcountry
}
}
var p1=new Person("Nithya",33,"Female","TN","India");
var p2=new Person("Hanu",24,"Female","TN","India");
p2.changeCountry="Singapore";
var p3=new Person("Dhanvi",31,"Female","Atlanta","USA");
console.log(p1.getname());
console.log(p3.getname());
console.log(p2.country);
console.log(p2.getname());