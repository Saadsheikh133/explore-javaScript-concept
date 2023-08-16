/* 
Ajax (Asynchronous JavaScript and XML) is a set of web development techniques used to create more dynamic and interactive web applications. It allows you to update parts of a web page without needing to reload the entire page. Instead of the traditional synchronous request-response cycle, where the user interacts with a webpage and waits for a full page reload, Ajax enables asynchronous communication between the web browser and the server.
*/

// example of ajax
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();