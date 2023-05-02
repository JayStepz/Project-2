const router = require('express').Router();
//const { Products , User } = require('../models');

// For use later. Personalized message on site to show current log in? "Welcome, USER!"
// const withAuth = require('../utils/Auth');

// Attempt to set Handlebars engine
router.set('view engine', 'hbs');

// Trying to have the default route go to the homepage
router.get('/', (req, res) => {
    res.render('homepage');
});

// TODO: Add route to homepage after log in
