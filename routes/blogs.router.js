const router = require("express").Router(); //chaining of methods

router.get("/", (req, res) => {
  res.json({ data: `hello form blogs` });
});

router.post("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!id || !name) throw "ID and Name is missing";
    res.json({ msg: `Hello from blog id ${id} of blog name ${name} ` });
  } catch (e) {
    next(e);
  }
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
