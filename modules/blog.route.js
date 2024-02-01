const router = require("express").Router();
const blogController = require("./blog.controller");

router.get("/blog", (req, res, next) => {
  try {
    res.json({ msg: "Hello from Blog Route" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    data.time = Math.floor(data.words / 238);
    console.log({ data });
    const result = await blogController.create(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
