const { log } = require("console");
const { CLIENT_RENEG_LIMIT } = require("tls");

let names =["Alice", "Bob", "Charlie"]

for(let name of names){
    if(name === "Bob"){
  
        continue; // Skip the rest of the loop for "Bob"
    }
    console.log(`Processing ${name}`);

}
// Using the break statement
console.log("Second for loop with break:");
for(let name of names){
if(name === "Bob"){
    console.log("Found Bob, exiting the loop.");
    break; // Exit the loop when "Bob" is encountered   
}
console.log(`Processing ${name}`);
}