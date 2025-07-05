//sample object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const values = Object.values(person);
console.log(values); // Output: ['John', 30, 'New York']
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 30],
// ['city', 'New York']]
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']