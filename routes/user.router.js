const router = require("express").Router(); //chaining of methods

router.get("/", (req, res) => {
  res.json({ data: `hello form user` });
});

router.post("/", (req, res) => {
  console.log(req.query, req.body);
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
