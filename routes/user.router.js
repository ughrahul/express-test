const router = require("express").Router(); //chaining of methods
const { numberFormatter } = require("../utils/numberFormatter");

// router.get("/", (req, res, next) => {
//   try {
//     res.json({ data: `hello form user` });
//   } catch (e) {
//     next(e);
//   }
// });

//
const checkRole = (req, res, next) => {
  console.log(req.headers);
  console.log("Hello, I'm Role checker");
  next();
};

const secondRoler = (req, res, next) => {
  console.log(req.body);
  console.log("Hello, I'm  Second Roler");
  next();
};

router.get("/", checkRole, secondRoler, (req, res, next) => {
  try {
    console.log(req.body);
    res.json({ msg: "hello from user route" });
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    const data = Object.keys(req.body).length;
    if (!data) throw new Error("Body missing");
    console.log({ data: req.body });

    const result = numberFormatter(
      req.params.number || req.body.number || req.query.number
    );
    res.json({ result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const result = numberFormatter(
      req.params.number || req.body.number || req.query.number
    );
    res.json({ result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", (req, res, next) => {
  try {
    const result = numberFormatter(
      req.params.number || req.body.number || req.query.number
    );
    res.json({ result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    const result = numberFormatter(
      req.params.number || req.body.number || req.query.number
    );
    res.json({ result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
