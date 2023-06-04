var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home.ejs', { title: 'Hello World' });
});

/* GET aboutme page. */
router.get('/aboutme', function (req, res, next) {
  res.render('aboutme.ejs', { title: 'Hello World' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects.ejs', { title: 'Hello World' });
});

/* GET projects page. */
router.get('/contact', function (req, res, next) {
  res.render('contact.ejs', { title: 'Hello World' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services.ejs', { title: 'Hello World' });
});
module.exports = router;
