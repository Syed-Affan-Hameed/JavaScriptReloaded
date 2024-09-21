let cat={
    name:"Sierra",
    breed:"Turkish",
    color:"White",
    location:"Ankara"
}
// use for-of loop as they all are arrays 
console.log("Keys of the cat object")
for(let key of Object.keys(cat)){
    console.log(key)
}
console.log("All the values of the cat object");
for(let value of Object.values(cat)){
    console.log(value)
}
console.log("Entries in the cat object");
for(let entry of Object.entries(cat)){
    console.log(entry);
}