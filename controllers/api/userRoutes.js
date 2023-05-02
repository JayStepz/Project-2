const router = require('express').Router();

// TODO: Add route to log in page
router.get('/login', (req, res) => {
    res.redirect('login');
});

// TODO: Add route to shopping cart page
router.get('/cart', (req, res) => {
    res.redirect('cart');
});

// TODO: Add route to checkout page
router.get('/checkout', (req, res) => {
    res.redirect('checkout');
});

// TODO: Add route to order history page
router.get('/orders', (req, res) => {
    res.redirect('orders');
});