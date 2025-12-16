// MINI PRACTICE FILE


function calculateAge(birthYear) {
const currentYear = 2025;
return currentYear - birthYear;
}


let myAge = calculateAge(2000);
console.log("My age is:", myAge);




const isAdult = (age) => {
if (age >= 18) {
return true;
}
return false;
};


console.log(isAdult(myAge));