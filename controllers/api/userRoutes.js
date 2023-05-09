const router = require('express').Router();
const withAuth = require('../../utils/auth');
const product = require("../../models/product")

router.get('/login', (req, res) => {
    res.render('login', {});

    // Does this need anything else?
});

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

module.exports = router