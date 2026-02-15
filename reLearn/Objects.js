let AI_Model ={
    name:"Claude",
    type:"Generative AI",
}

console.log(AI_Model.name);
console.log(AI_Model["name"]);

const cat={
    name:"Whiskers",
    age:3,
    breed:"Siamese",
    isIndoor:true,
    sound:function(){
        console.log("Meow!");
    },
    eats(){
        console.log("Nom nom nom!");
    }
}

for(let key in cat){
    console.log(`${key}: ${cat[key]}`);
}
console.log("Name of my cat is:- ",cat.name);