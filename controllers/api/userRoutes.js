const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models/User');

router.post('/login', async (req,res) => {
    try{
        const userInput = await User.findOne({ where: {  email: req.body.email } });
        const password =  await userInput.checkPassword({ where: { password: req.body.password}});

        if(!userInput) {
            res.status(400).json({ message:'wrong email or password'});
            return;
        }
        if(!password) {
            res.status(400).json({ message:'wrong email or password'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userInput.id;
            req.session.logged_in= true;
            res.json({ user: userInput, message: 'Success!'});
        });
    }
    catch (err) {
        res.status(400).json(400);
    }
});

router.post('/', async (req,res)=> {
    const userInput = await User.create(req.body);
    req.session.save(()=>{
        req.session.user_id=userInput.id;
        req.session.logged_in=true;
        res.status(400).json(err);
    });
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

module.exports = router;