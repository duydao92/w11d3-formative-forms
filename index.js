const express = require("express");
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3000;

var csrfProtection = csurf({ cookie: true });
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.render("index", {users})
});

app.get('/create', csrfProtection, async (req, res) => {
  res.render('create-form', { csrfToken: req.csrfToken() });
});

// app.post('/create', csrfProtection, asynch (req, res) => {

// });


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
