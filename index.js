const express = require("express");
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3000;

var csrfProtection = csurf({ cookie: true });
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.render("index", {users})
});

app.get('/create', csrfProtection, async (req, res) => {
  const errors = [];
  res.render('create-form', { csrfToken: req.csrfToken(), errors });
});

app.post('/create', csrfProtection, async (req, res) => {
  console.log(req.body);
  errorHandling(req.body)
});

function errorHandling (obj) {
  let errors = [];
  if(obj.password !== obj.confirmPassword){
    errors.push('Passwords need to match!')
  }
  if(obj.firstName){
    errors.push('Passwords need to match!')
  }
  return errors
}


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
