const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT,process.env.IP, () => console.log(`Example app listening on port ${port}!`))/* var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "wah wah wah",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/secret', isLoggedIn, function (req, res) {
  res.render('secret');
});

// AUTH Routes

//sign up page
app.get("/register", function(req, res) {
    res.render("register");
});

// register post
app.post("/register", function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret"); 
        });
    });
});
// LOGIN
// render login form
app.get("/views/login.ejs", function(req, res) {
   res.render("login"); 
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
   successRedirect: "/secret",
   failureRedirect: "/login" 
}), function(req, res) {
    
});

app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening on port 3000!');
}); */