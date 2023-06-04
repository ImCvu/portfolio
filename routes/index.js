var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home.ejs', { title: 'Home' });
});

/* GET aboutme page. */
router.get('/aboutme', function (req, res, next) {
  res.render('aboutme.ejs', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects.ejs', { title: 'Projects' });
});

/* GET projects page. */
router.get('/contact', function (req, res, next) {
  res.render('contact.ejs', { title: 'Contact' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services.ejs', { title: 'Services' });
});
module.exports = router;
