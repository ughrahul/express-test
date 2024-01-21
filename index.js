const express = require("express");
const app = express();

// Printing Hello World!
app.get("/", (request, response) => {
  response.json({ msg: "Hello World!" });
});

//Making dynamic(Route 3)
app.get("/:name/:welcome", (request, response) => {
  const data = request.params.name;
  const data2 = request.params.welcome;
  response.json({ msg: `Hello ${data} ! Welcome to ${data2} website` });
});

//Adding
app.get("/sum/:number1/:number2", (req, res) => {
  const { number1, number2 } = req.params;
  const sum = parseInt(number1) + parseInt(number2);
  res.json({ msg: `The sum is ${sum}` });
});

app.listen(8000, () => {
  console.log("Application is running...");
});

//ROUTE METHODS
//get() => server to frontend
//post() => frontend to server
//delete() => frontend to server deletee my 1 data
//PUT() => frontend to server;fix majority property of data
//PATCH() => frontend to servr fix 1 single property of data
