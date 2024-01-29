const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ msg: "Welcome to blogs route" });
  next(e);
});

router.use((req, res, next) => {
  req.sysRole = "admin";
  next();
});

const checkRoles = (userRole, sysRole) => (req, res, next) => {
  const result = sysRole.includes(userRole);
  if (!result) {
    throw new Error("Permission denied");
  }
  next();
};

router.get("/user", (req, res, next) => {
  try {
    checkRoles("user", req.sysRole)(req, res, next);
    res.json({ msg: "User Access " });
  } catch (e) {
    next(e);
  }
});

router.get("/admin", (req, res, next) => {
  try {
    checkRoles("admin", req.sysRole)(req, res, next);
    res.json({ msg: "Welcome Admin!" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
