const router = require('express').Router();
const withAuth = require('../../utils/auth');
const product = require("../../models/product")
const highscore = require("../../models/highscore")
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

router.post("/highscore", async function(request, response){
  highscore.create({
    name : "You",
    score : request.session.score
  }).then(function(){
    request.session.save(function(){
      request.session.score = 0
      
      return response.status(200).json()
    })
    
    return response.status(200).json()
  }).catch(function(error){
    return response.status(400).json(error)
  })
})

router.get("/cart", async function(request, response){
  try{
    return response.status(200).json(request.session.score)
  }catch(error){
    return response.status(400).json(error)
  }
})

router.post("/cart/:product_id", async function(request, response){
  try{
    const {price : product_price} = await product.findByPk(request.params.product_id, {
      plain : true
    })
    
    request.session.save(function(){
      request.session.score = request.session.score ? 
      request.session.score + product_price :
      product_price
      
      return response.status(200).json()
    })
  }catch(error){
    return response.status(400).json(error)
  }
})

module.exports = router;