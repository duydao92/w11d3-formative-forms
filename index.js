const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.send("Hello World!");

  res.render("index", {users})
});


const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
