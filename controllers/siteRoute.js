const router = require('express').Router();
const path = require('path');
//const { Products , User } = require('../models');

// For use later. Personalized message on site to show current log in? "Welcome, USER!"
// const withAuth = require('../utils/Auth');

// Attempt to set Handlebars engine
//router.set('view engine', 'hbs');


// Trying to have the default route go to the homepage
router.get('/', async (req, res) => {
  try{
    res.render("homepage", {})
  } catch(error){
    res.status(500).json(error)
  }
});

router.get('/login', (req, res) => {
  if(req.session.logged_in) {
      res.redirect('/homepage');
      return;
  }
  res.render('login');
});

// TODO: Add route to homepage after log in

module.exports = router;