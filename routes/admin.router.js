const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: `hello from admin` });
});

router.post("/", (req, res) => {
  //req.params => req.params
  //req.query => ?key=value
  //req.body => raw json ({"key": "value"})
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
