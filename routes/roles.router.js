const router = require("express").Router(); //chaining of methods

router.get("/", (req, res) => {
  res.json({ data: `hello form roles` });
});
module.exports = router;
