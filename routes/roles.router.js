const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ msg: "Welcome to roles route" });
  next();
});

const checkRoles = (sysRole) => {
  return (req, res, next) => {
    const userRoles = req.body.role
      ? [req.body.role]
      : req.headers.role
      ? [req.headers.role]
      : [];
    console.log(userRoles);
    if (userRoles.length === 0) throw new Error("Roles are missing");
    const result = userRoles.some((role) => sysRole.includes(role));
    if (!result) throw new Error("Permission denied");
    next();
  };
};

const encryptPw = async (req, res, next) => {
  try {
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
      res.json({ Bcrypted_Password: req.body.password });
    }
  } catch (error) {
    next(error);
  }
};

router.get("/user", checkRoles(["user"]), encryptPw, (req, res, next) => {
  try {
    res.json({ msg: "Welcome User!" });
  } catch (e) {
    next(e);
  }
});

router.get("/admin", checkRoles(["admin"]), encryptPw, (req, res, next) => {
  try {
    res.json({ msg: "Welcome Admin!" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
