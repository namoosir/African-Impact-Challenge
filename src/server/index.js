const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const User = require('./models/user')
const Entrepreneur = require('./models/entrepreneur');
const Instructor = require('./models/instructor');
const Partner = require('./models/partner');
const Company = require('./models/company');

const userRoutes = require('./routes/users')

const app = express();
mongoose.connect("mongodb://localhost:27017/aic", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(bodyParser.json);

app.use(passport.initialize());

require("./passport")(passport);

app.use('', userRoutes)

app.listen(5000, () => {
  console.log("Serving on port 5000");
});
