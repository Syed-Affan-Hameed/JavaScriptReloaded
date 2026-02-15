
//Factory Functions are functions that return objects. They are a way to create multiple objects with the same properties and methods without having to use a class.
function getCar(name,color,year,topspeed){

const carObject={
    name,
    color,
    year,
    topspeed
}
return carObject;
}

let newCar=getCar("BMW","red",2020,250);
console.log(`your new car is ${newCar.name} and its color is ${newCar.color} and it was made in ${newCar.year} and its top speed is ${newCar.topspeed}`);
let anotherCar=getCar("Audi","blue",2019,240);
console.log(`your new car is ${anotherCar.name} and its color is ${anotherCar.color} and it was made in ${anotherCar.year} and its top speed is ${anotherCar.topspeed}`);

