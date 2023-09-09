const express = require("express");
const hbs = require("hbs");
const app = express();
const credentialsModel = require("./database/database");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/signup", async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  await credentialsModel.insertMany([data]);
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const user = await credentialsModel.findOne({ email: req.body.email });
    if (user.password === req.body.password) {
      res.render("home");
    } else {
      res.send("Oppps.... Wrong Password");
    }
  } catch (error) {
    res.send("Opps.... Wrong credentials");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
