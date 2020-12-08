'use strict';

let globalName = 'superarchi';

{
// local variable
let name = 'jinypia';
}
// error console.log(name); 
console.log(globalName);

// var hoisting : move declaration from bottom to top)
// var --> use let
{
    var age = 4;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change. 
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze() )
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safty
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolen, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17;  // integer
const size = 17.1; // decimal

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// bigInt (fairly new, don't use it yet)
const bigInt = 11111111111n;

// null
let nothing = null;

// undifined
let x;

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
// changeable even use const
const jinypia = { name: 'jinypia', age: 47 };
jinypia.name = 'aaa';
console.log(jinypia.name);

