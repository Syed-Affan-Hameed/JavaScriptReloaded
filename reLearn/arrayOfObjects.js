const readline = require('readline');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);

  const employeeFound = findEmployeeByName(answer.trim());
if(employeeFound){
    console.log(`Employee found: ${employeeFound.name} with ID: ${employeeFound.id}`);
}else{
    console.log(`No employee found with the name: ${answer}`);
}
  readLine.close();
});

const employees=[
    {
        id:1,
        name:"John Doe",
    }
    ,
    {
        id:2,
        name:"Jane Smith",
    },
    {
        id:3,
        name:"Alice Johnson",
    },
    {
        id:4,
        name:"Bob Brown",
    }
]


function findEmployeeByName(name) {

    const employeeToBeFound= employees.find(function(employee){
        if(employee.name === name){
            return employee;
        }

    });

    return employeeToBeFound;
    // Alternatively, you can use arrow function syntax:

   // return employess.find(employee => employee.name === name);
}