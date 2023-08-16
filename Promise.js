// Example
const fetchData = new Promise((resolve, reject) => {
  // Simulate fetching data
  setTimeout(() => {
    const data = { name: "Saad", age: 20 };
    resolve(data); // Data fetched successfully
  }, 1000);
});

fetchData.then((data) => {
  console.log(data);
});
