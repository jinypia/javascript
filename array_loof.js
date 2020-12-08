'use strict';

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['a', 'b'];
console.log(fruits);
console.log(fruits[0]);
console.log([fruits.length-1]);


for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(function (fruit, index, array){
    console.log(fruit, index, array)
})

fruits.forEach((fruit, index, array) => {
    console.log(fruit, index, array)
})

fruits.forEach((fruit) => console.log(fruit)

fruits.push('c', 'd')
fruits.pop()
fruits.unshift('c', 'd')
fruits.shift()
//shift, unshift 보다 push, pop 이 빠름. shift는 전체 데이터가 움직임

fruits.splice(1, 2);

const fruits2 = ['e', 'f'];
const newFruits = fruits.concat(fruits2);

console.log(fruits.indexOf('a'));
console.log(fruits.lastIndexOf());
console.log(fruits.includes('a')); //true or false

