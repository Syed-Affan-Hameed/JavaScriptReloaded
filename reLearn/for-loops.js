const numArray =[1,2,3,4,5];

// normal for loop
for(let i=0;i<numArray.length;i++){
    console.log("from normal for loop:");
    
    console.log(numArray[i]);
}
// for-of loop
for(const num of numArray){
    console.log("from for-of loop:");
    console.log(num);
}
// for-in loop
for(const index in numArray){
    console.log("from for-in loop:");
    console.log(numArray[index]);
}

