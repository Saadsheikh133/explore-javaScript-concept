// method 1.
for (let i = 0; i <= 5; i++) {
    // console.log(i)
}

// method 2.
var person = {
  firstName: "Saad",
  lastName: "Sheikh",
  age: 30,
  occupation: "Developer",
};

for (var key in person) {
//   console.log(key);
}

// method 3.
const arrs = [1, 3, 5]
for (const arr of arrs) {
    // console.log(arr)
}

// method 4.
const array = [2, 4, 6, 7]
array.forEach(element => {
    console.log(element)
});