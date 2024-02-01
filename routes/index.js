const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const adminRouter = require("./admin.router");
const rolesRouter = require("./roles.router");
const categoriesRouter = require("./categories.router");

const blogRouter = require("../modules/blog.route");

// Printing Hello World!
//router.get("/", (req, res) => {
//res.json({ msg: "Hello World!" });
//});

router.get("/", (req, res, next) => {
  try {
    console.log({ body: req.body });
    res.json({ msg: "hello from route index" });
  } catch (e) {
    next(e);
  }
});

//connecting all route pages
router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/roles", rolesRouter);
router.use("/categories", categoriesRouter);

router.use("/blog", blogRouter);

module.exports = router;
