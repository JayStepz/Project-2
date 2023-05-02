const router = require('express').Router();

// TODO: Add route to log in page
router.get('/login', (req, res) => {
    res.render('login');
});

// TODO: Add route to shopping cart page
router.get('/cart', (req, res) => {
    res.render('cart');
});

// TODO: Add route to checkout page
router.get('/checkout', (req, res) => {
    res.render('checkout');
});

// TODO: Add route to order history page
router.get('/orders', (req, res) => {
    res.render('orders');
});