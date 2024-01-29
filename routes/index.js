const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const adminRouter = require("./admin.router");
const blogsRouter = require("./blogs.router");
const rolesRouter = require("./roles.router");
const categoriesRouter = require("./categories.router");

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
router.use("/blogs", blogsRouter);
router.use("/roles", rolesRouter);
router.use("/categories", categoriesRouter);
module.exports = router;
