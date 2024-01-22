const express = require("express");
const router = express.Router();

// Printing Hello World!
router.get("/", (request, response) => {
  response.json({ msg: "Hello World!" });
});

router.get("/:name/:welcome", (request, response) => {
  const data = request.params.name;
  const data2 = request.params.welcome;
  response.json({ msg: `Hello ${data}! Welcome to ${data2} website` });
});

router.get("/sum/:number1/:number2", (req, res) => {
  const { number1, number2 } = req.params;
  const sum = parseInt(number1) + parseInt(number2);
  res.json({ msg: `The sum is ${sum}` });
});

module.exports = router;
