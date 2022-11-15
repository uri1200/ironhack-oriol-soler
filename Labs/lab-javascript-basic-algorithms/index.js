//Iteration 1: Names and Input
console.log('Iteration 1: Names and Input');

const hacker1 = 'Juaan';
console.log('The driver name is ' + hacker1);
const hacker2 = "Pedro";
console.log('The navigator name is ' + hacker2);

//Iteration 2: Conditional
console.log("Iteration 2: Conditionals");
if (hacker1.length > hacker2.length)
    console.log('The driver ' + hacker1 +' has the longest name, it has ' + hacker1.length);
else if (hacker2.length > hacker1.length)
    console.log('The navigator ' + hacker2 +' has the longest name, it has ' + hacker2.length);
else 
    console.log('Wow, you both have thequally long names, ' + hacker1.length + ' characters')

//Iteration 3: Loops
console.log('Iteration 3: Loops');
//3.1
console.log('3.1')

let capsName = ""

for (let i = 0; i< hacker1.length; i++) {
    capsName += hacker1[i].toUpperCase() + ' ';
}
console.log(capsName);

//3.2
console.log('3.2')

let reverseName = ""

for (let i = hacker1.length; i >= 0; i--) {
    reverseName += hacker1[i];
}

console.log(reverseName);

//3.3
console.log('3.3')

function lexicoGraphicOrder (str1, str2) {

    if (str1 > str2) 
        console.log(" The drivers name goes first ");
    else if (str1 < str2) 
        console.log('Yo, the navigator goes first definitely');
    else
        console.log('What?! You both have the same name?');
}

lexicoGraphicOrder (hacker1,hacker2);



