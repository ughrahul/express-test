const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexRouter = require("./routes");
const blogRouter = require("./modules/blog.route");

//connecting to database
mongoose.connect("mongodb://localhost:27017/rahulapp").then(() => {
  console.log("Database is Connected.");
});

//handles incoming requests containing JSON data
app.use(express.json());

//using global middleware which takes request first to show the date
app.use((req, res, next) => {
  const date = new Date().toISOString();
  req.body.date = date;
  next();
});

//using to show static files from public directory.
app.use(express.static("public"));

//using blogs
app.use("/", blogRouter);

app.use("/", indexRouter);

//handles error
app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: err });
});

//listens app on p=given port
app.listen(8000, () => {
  console.log("Application is running on port http://localhost:8000");
});
