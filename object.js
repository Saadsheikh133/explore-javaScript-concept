// simple object
const person = {
  name: "Saad",
  age: 24,
  occupation: "Developer",
};
// console.log(person.name)

// Nested object
const personInfo = {
  name: "Saad",
  age: 24,
  occupation: "Developer",
    address: {
        current: {
            Vill: "Jhinapara",
            Post: 'Bipro-halsa',
            Sub_district: "Natore-Sadar",
            District: 'Natore',
            Country: 'Bangladesh'
      }
  },
};
// console.log(personInfo.address.current.District)

// array of object
const friends = [
    {
        role: 2,
        name: "korim",
        age: 20,
        class: 9
    },
    {
        role: 1,
        name: "rohim",
        age: 20,
        class: 9
    },
    {
        role: 3,
        name: "jodu",
        age: 20,
        class: 9
    },
]
// console.log(friends[1])
