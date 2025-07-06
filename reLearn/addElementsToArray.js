const numArray =[5,6,7,9,10];

console.log("original array", numArray);


numArray.push(11,12,13,14,15);

console.log("array after adding elements to the end", numArray);

numArray.unshift(1,2,3,4);

console.log("array after adding elements to the beginning", numArray);


// adding elements to the middle of the array

numArray.splice(7, 0, 8);
console.log("array after adding elements to the middle in the index 7", numArray);

