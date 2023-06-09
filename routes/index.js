/*
Student’s Name:Shivani Shyamal Kapatel
StudentID: 301250126
Date: 09 June 2023
COMP229– Web Application Development 
Express Portfolio Site 
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home.ejs', {
    title: 'Home',
    phoneno: '647-123-4567',
    email: 'shivanikapatel22@gmail.com',
    address: 'Toronto, ON,Canada',
  });
});

/* GET aboutme page. */
router.get('/aboutme', function (req, res, next) {
  res.render('aboutme.ejs', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects.ejs', { title: 'Projects I have completed' });
});

/* GET projects page. */
router.get('/contact', function (req, res, next) {
  res.render('contact.ejs', {
    title: 'Contact Me',
    email: 'shivanikapatel22@gmail.com',
    phone: '647-123-4567',
    address: 'Toronto, ON',
  });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services.ejs', { title: 'Services', title2: 'Services I offer' });
});
module.exports = router;
