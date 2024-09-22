function multiply(...args){
    let product = args.reduce((acc,curr)=>{return acc*curr},1);

    return product;
}

console.log(multiply(1,2,3,4,5));