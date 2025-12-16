// PRIMITIVE DATA TYPES


let name = "Zara"; // string
let score = 90; // number
let passed = true; // boolean
let nothing = null; // null
let notDefined; // undefined


console.log(typeof name);
console.log(typeof score);
console.log(typeof passed);
console.log(typeof nothing); // object (JS quirk)
console.log(typeof notDefined);




// NON‑PRIMITIVE DATA TYPES

// array -- arrays are like lists of items (no key-value pair, just items)
let hobbies = ["coding", "drawing", "music"]; 


// objects -- objects uses a key-value pair format
let user = {
    username: "ayyub",
    role: "developer",
    isActive: true
}; 


console.log(hobbies);
console.log(user);