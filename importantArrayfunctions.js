//every(), some() require predicate functions;

let numbers=[1,2,3,4,5,6];

let aresSomeEven=numbers.some(n=>n%2===0);
console.log(aresSomeEven);

let areAllEven=numbers.every(n=>n%2===0);
console.log(areAllEven);

//filter() , map() require callback functions

let filteredOddElements= numbers.filter(n=>n%2!=0);
console.log(filteredOddElements);

let sqauredNumberFromArray=numbers.map(n=>Math.pow(n,2));
console.log(sqauredNumberFromArray);

// one more example for map(), it is really useful
let smallCaseLetters=['a','b','c','d'];

let UpperCaseLetters=smallCaseLetters.map(letter=>letter.toUpperCase());
console.log(UpperCaseLetters);

//reduce method requires 2 parameters accumuloator and currentvalue and initial value for the accumulator

let sumOfAllelements= numbers.reduce((acc,curr)=>{
        return acc+curr;
},0) // 0 is initial value for the accumulator
console.log(`sum of all values ${sumOfAllelements}`)