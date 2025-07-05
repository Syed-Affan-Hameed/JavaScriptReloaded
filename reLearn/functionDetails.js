//unlike other programming languages functions in JavaScript are first class objects, meaning they can be treated like any other value. This allows for powerful programming techniques such as higher-order functions, closures, and callbacks. Functions can be assigned to variables, passed as arguments to other functions, and returned from functions.

function add(a, b = 1) {
    return a + b;
}


const result = add(5);
console.log("the result of the function is", result);
console.log("the number of parameters that the function takes in",add.length);
