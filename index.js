const express = require("express");
const app = express();

const indexRouter = require("./routes");

//effortlessly handle incoming requests containing JSON data
//by automatically parsing and making it accessible in the program.(middleware)
app.use(express.json());

//using global middleware which takes request first to show the date
app.use((req, res, next) => {
  const date = new Date().toISOString();
  req.body.date = date;
  next();
});

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(8000, () => {
  console.log("Application is running on port http://localhost:8000");
});
