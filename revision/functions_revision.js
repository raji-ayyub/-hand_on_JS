// FUNCTION DECLARATION



// a normal function does not work unless called
function greet() {
    console.log("Hello, welcome to JavaScript!");
}


greet(); //call the function for it to work




// FUNCTION WITH RETURN

//  this function returns a value that can be stored as a variable when called
function getYear() {
    return 2025;
}


let year = getYear();
console.log(year); // here year no holds whatever getYear() returns




// ARROW FUNCTION (modern JS)

const sayHi = () => {
    console.log("Hi from arrow function");
};


sayHi();