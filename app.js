var express = require("express");
var app = express();
const mongoose = require("mongoose");
var Illustration = require("./models/illustration.js");
var Website = require("./models/website.js");
const seedDB = require("./test.js");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
require('dotenv').config();



// mongoose.connect('mongodb://localhost:27017/personal_website', {
  mongoose.connect(process.env.AUTH_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));


app.use(express.static('public'))
app.use(express.static("scripts")) 


app.set("view engine", "ejs");

seedDB();


app.get("/", function(req, res) {
    res.redirect("/home");
})

app.get("/home", function(req, res){
    res.render("home");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.get("/works", function(req, res) {
    Illustration.find({}, function(err, allIllustrations){
        if (err) {
            console.log(err);
        }
        else {
            Website.find({}, function(err, allWebsites) {
                if (err) {
                    console.log(err);
                }
                else {
                res.render("works", {illustrations: allIllustrations, websites: allWebsites});
                }
            })
        }
    })
})

app.get("/works/code", function(req, res) {
  res.render("code");
})

app.get("/works/webpage", function(req, res) {
  Website.find({type:"webpage"}, function(err, codeWebsites) {
    if (err) console.log(err);
    else {
      res.render("webpage", {website: codeWebsites});
      
    }
})
})

app.get("/works/design", function(req, res) {
  Illustration.find({type: "COS"}, function(err, COS) {
    Illustration.find({type: "Laiye"}, function(err, laiye){
      Illustration.find({type: "hs"}, function(err, hs) {
        Illustration.find({type: "personal"}, function(err, personal) {
           res.render("design", {COS: COS, laiye: laiye, hs: hs, personal: personal});
        })
      })
    })
  })
})

app.get("/works/marketing", function(req, res) {
  res.render("marketing");
})

app.get("/contact", function(req, res){
    res.render("contact");
})


// POST route from contact form
app.post('/contact', (req, res) => {


    // Instantiate the SMTP server

   var smtpTransport = nodemailer.createTransport({
    service: "hotmail",
    host: "smtp.office365.com",
    port: 587,
    secureConnection: false,
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
    },
    tls: {
      ciphers:'SSLv3'
      },
    debug: false,
    logger: true
});

  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: process.env.AUTH_RECIPIENT,
      subject: 'New message from contact form',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
  
    // Attempt to send the email
    smtpTransport.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.render('contact-failure') // Show a page indicating failure
      }
      else {
        res.render('contact-success') // Show a page indicating success
      }
    })
  })

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server started");
})