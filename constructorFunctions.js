function CreateCat(name,breed,sound){
    this.name=name;
    this.breed=breed;
    this.sound =function(){
      console.log(sound);
    }
}

let anotherCat= new CreateCat("hurair","persian","Meow");
console.log("Another cat with contructor function");
console.log(anotherCat);
