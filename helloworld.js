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

let bike1 ={
name:"Splendor",
topspeed:"80kmph"
}
let bike2 ={
    name:"Bullet",
    topspeed:"150kmph"
}

//use this when we know the key of the object at compile time
console.log(bike1.name);
console.log(bike1.topspeed);
// Accessing properties using bracket notation use this when the key is dynamic or not known at compile time
console.log(bike2["name"]);
console.log(bike2["topspeed"]);
