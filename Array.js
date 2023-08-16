// simple array
const names = ['rohim', 'korim', 'sakib', 'shofik']
// console.log(names) //Output: ['rohim', 'korim', 'sakib', 'shofik']

// find specific index of an array
const friends = ["rohim", "korim", "sakib", "shofik"];
// console.log(friends[2]) //Output: "sakib";

// push method - add an element to the end of an array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7);
// console.log(numbers); //Output: [1, 2, 3, 4, 5, 6, 7]

// pop method - remove last element from an array
const num1 = [1, 2, 3, 4, 5, 6, 7];
num1.pop()
// console.log(num1) //Output: [1, 2, 3, 4, 5, 6]

// unshift method -add an element to the start of an array
const num2 = [2, 3, 4, 5, 6, 7];
num2.unshift(1)
// console.log(num2) //Output: [1, 2, 3, 4, 5, 6, 7]

// shift method - remove first element of an array
const num3 = [1, 2, 3, 4, 5, 6, 7];
num3.shift()
// console.log(num3) //Output: [2, 3, 4, 5, 6, 7]

// slice method -  extract a section of an array and return a new array
const friends1 = ["rohim", "korim", "sakib", "shofik"];
// console.log(friends1.slice(2)); //Output: [ 'sakib', 'shofik' ]
// console.log(friends1.slice(1, 3)) //Output: [ 'korim', 'sakib' ]
// console.log(friends1.slice(1-3)) //Output: [ 'sakib' ]

// concat method - merge two or more arrays
const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7];
const array = arr.concat(arr2);
// console.log(array) //Output: [1, 2, 3, 4, 5, 6, 7];

// splice method - add/remove an element in an array
const letters = ['a', 'c', 'e', 'f'];
letters.splice(1, 0, 'b');
console.log(letters); // Output: [ 'a', 'b', 'c', 'e', 'f' ]
letters.splice(3, 2, 'd');
console.log(letters); // Output: [ 'a', 'b', 'c', 'd' ]