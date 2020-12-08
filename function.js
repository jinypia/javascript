// 1. 
// function name(parm1, parm2) { body... return; }
// one function === one thing

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');
log(1234);

// Typescript
// function log(message: string): number {
//    console.log(message);
//    return 0;
//}

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const jinypia = { name: 'jinypia' };
changeName(jinypia);
console.log(jinypia);

// 3. Default parameters (added in ES6)
function showMessages(message, from = 'default') {
    console.log(`${message} by ${from}`);
}
showMessages('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    console.log(' ');

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'jinypia')

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'local hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'child hello';
    }
//    console.log(childMessage);
    return undefined; // 생략 가능
}
printMessage();
// console.log(message);

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as an argument to other functions
// can be returned by another funciton

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosted)
// a function expression is created when the execution reaches it. 
// print(); --> error, because it's not defined yet.
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes(); // callback function
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
//const simplePrint = function () {
//    console.log('simplePrint!');
//};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIEF');
})();


// Fun quiz
// function calculate(command, a, b)
// command: add, substact, divide, multiply, remainter

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 3));