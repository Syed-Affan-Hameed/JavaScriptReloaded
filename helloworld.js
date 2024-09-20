//dot notation and bracket notation of accessing elements
let car={
    name:"Mclaren",
    topspeed:"240kmph"
}
//use this when we do not know the key fo teh object until runtime
console.log("Accessing the object values using bracket notation")
console.log(car["name"]);
console.log(car["topspeed"]);

console.log("Accessing the object values using dot notation");
console.log(car.name);
console.log(car.topspeed);
