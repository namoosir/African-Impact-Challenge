const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const userRoutes = require('./routes');
const Partner = require('./models/partner');



/* const Entrepreneur = require('./models/entrepreneur')
const Instructor = require('./models/instructor')
const Partner = require('./models/partner');
const Company = require('./models/company') */

const app = express();
const server = app.listen(3000);
mongoose.connect("mongodb://localhost:27017/african-impact-challenge", {
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

app.use(express.urlencoded({ extended: true }));

/* app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
}); */

//app.use(passport.initialize());
//app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

/* app.post('/register', async(req, res, next) =>{
    try {
        const { firstName, lastName, email, username, password } = req.body;
        const user = new Entrepreneur({ firstName, lastName, email, username, password });
        const registeredUser = await Entrepreneur.register(email, username, password);
        // req.login(registeredUser, err => {
        //     if (err) return next(err);
        //     req.flash('success', 'Welcome to Yelp Camp!');
        //     res.redirect('/campgrounds');
        // });

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register')
    }

}) */

//routes
/* app.get('/add', (req, res) => {
  const user = new Partner({
    firstName: 'muta',
    lastName: 'boss',
    username: 'depressed',
    company: 'money',
    role: 'Chill leader'
  })

  user.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
}); */

app.use('/profile', userRoutes);