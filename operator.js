// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // - / * %(remainder) **(exponentiation)
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const prostIncrement = counter++;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y // x -= y, x *= y, x /= y

// 5. Comparison operators
console.log(10 <  6); // <= >=

// 6. Logical operators: ||, &&, !
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
//if (nullableObject != null) {
//    nullableObject.something;
//}

function check() {
    for (let i = 0; i < 10; i++) {
        console.log(`i: ${i}`);
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, with type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator: ?
// condition ? value1 : value2;

// 10 switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('sale all!');
        break;
}

// 11. Loops
let i = 3;
while (i >  0) {
    console.log(`while: ${i}`);
    i--;
}

// do while 
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for (i = 3; i > 0; i--) {}
// for (let i = 3; i > 0; i--) {}

// break, continue

