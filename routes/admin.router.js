const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: `hello from admin` });
});
module.exports = router;
