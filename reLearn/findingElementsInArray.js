const num= [1,2,3,4,5,6,7,8,9,10,5,5,1,6,8,3,5,15];

// Finding elements in an array using built-in methods

const index = num.indexOf(5); // returns the index of the first occurrence of the element, if not found returns -1
console.log("The index of 5 in the array is:", index);

const includesFive = num.includes(5); // returns true if the element is found, false otherwise

const lastIndex = num.lastIndexOf(5); // returns the index of the last occurrence of the element, if not found returns -1

console.log("The last index of 5 in the array is:", lastIndex);

const firstIndex = num.findIndex((element) => element === 5); // returns the index of the first element that satisfies the provided testing function, if not found returns -1
console.log("The first index of 5 in the array is:", firstIndex);

// if an element is not found, the indexOf and lastIndexOf methods return -1
const notFoundIndex = num.indexOf(100); // returns -1

if(notFoundIndex===-1){
console.log("The index of 100 in the array is:", notFoundIndex);
}
