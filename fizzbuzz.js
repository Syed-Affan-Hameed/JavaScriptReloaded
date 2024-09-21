let z=335;

if(z%3===0&&z%5===0){
    console.log("FIZZBUZZ!")
}
else if(z%3===0&&z%5!=0){
    console.log("FIZZ!")
}
else if(z%3!=0&&z%5===0){
    console.log("BUZZ!")
}else{
    console.log(z)
}