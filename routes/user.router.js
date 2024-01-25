const router = require("express").Router(); //chaining of methods
const { numberFormatter } = require("../utils/numberFormatter");

router.get("/", (req, res) => {
  res.json({ data: `hello form user` });
});

router.post("/:number", (req, res) => {
  const result = numberFormatter(
    req.params.number || req.body.number || req.query.number
  );
  res.json({ result });
});

router.put("/", (req, res) => {
  console.log(req.query, req.body);
});
router.patch("/", (req, res) => {
  console.log(req.query, req.body);
});
router.delete("/", (req, res) => {
  console.log(req.query, req.body);
});

module.exports = router;
