const today = new Date();

console.log("Today's date is:", today);

const day = today.getDate();
const month = today.getMonth() + 1; // Months are zero-based, so we add 1
const year = today.getFullYear();

console.log(`Today's date in DD/MM/YYYY format is: ${day}/${month}/${year}`);
