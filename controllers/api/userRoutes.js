const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/login', (req, res) => {
    res.render('login', {});

    // Does this need anything else?
});

router.get('/cart', (req, res) => {
    // If the user is logged in, continue to Cart.
    // If the user is not logged in, direct to Log In.
    if (req.session.logged_in) {
        res.render('cart');
        return;
    }

    res.render('/login');
});

// TODO: Only display through shopping cart page and only if the user is logged in?
router.get('/checkout', (req, res) => {
    res.render('checkout');
});

router.get('/orders', (req, res) => {
    // If the user is logged in, continue to Orders.
    // If the user is not logged in, direct to Log In.
    if (req.session.logged_in) {
        res.render('orders');
        return;
    }
    // TODO: If user is not logged in, redirect to log in page
    res.render('/login');
});

module.exports = router