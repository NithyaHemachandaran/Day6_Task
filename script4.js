class UberPriceCalcu{
  constructor(ratePerKilometer,ratePerMinute,baseFare){
    this.ratePerKilometer=ratePerKilometer;
    this.ratePerMinute=ratePerMinute;
    this.baseFare=baseFare;
  }
  calculatePrice(distanceInKilometer,timeInMinute){
    const distanceCost= this.ratePerKilometer * distanceInKilometer;
    const timeCost=this.ratePerMinute * timeInMinute;
    const totalPrice=this.baseFare + distanceCost + timeCost;
    return totalPrice;

  }
}
const calculator=new UberPriceCalcu(20,2,10);
const distance = 10;
const time = 30;
const price=calculator.calculatePrice(distance,time);
console.log("The Estimated Uber Price Rs " +price);