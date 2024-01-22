const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const adminRouter = require("./admin.router");

// Printing Hello World!
router.get("/", (request, response) => {
  response.json({ msg: "Hello World!" });
});

router.use("/user", userRouter);
router.use("/admin", adminRouter);
module.exports = router;
