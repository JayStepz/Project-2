const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');

    // Does this need anything else?
});

router.get('/cart', (req, res) => {
    res.render('cart');

    // TODO: If user is not logged in, redirect to log in page
});

// TODO: Only display through shopping cart page and only if the user is logged in?
router.get('/checkout', (req, res) => {
    res.render('checkout');
});

router.get('/orders', (req, res) => {
    res.render('orders');

    // TODO: If user is not logged in, redirect to log in page
});

module.exports = router