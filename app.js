console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB shoqirsh
const db = require("./server").db();

//1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code
//3: Views code
app.set("views", "views"); //
app.set("view engine", "ejs");

//4: Routing Code

app.post("/create-item", (req, res) => {
  //TODO: code with db here
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
