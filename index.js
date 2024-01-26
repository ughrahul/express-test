const express = require("express");
const app = express();

const indexRouter = require("./routes");

app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(8000, () => {
  console.log("Application is running...");
});
