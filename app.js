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
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end("Successfully added");
    }
  });
  //TODO: code with db here
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
