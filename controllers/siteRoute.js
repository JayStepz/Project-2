const router = require('express').Router()
const product = require("../models/product")
const highscore = require("../models/highscore")

router.get("/", async function(request, response){
  try{
    const product_data = await product.findAll()
    
    const products = product_data.map(function(data){
      return data.get({plain : true})
    })
    
    return response.render("homepage", {products})
  }catch(error){
    return response.status(500).json(error)
  }
})

router.get("/highscores", async function(request, response){
  try{
    const highscore_data = await highscore.findAll().catch(function(error){
      return response.json(error)
    })
    
    const highscores = highscore_data.map(function(data){
      return data.get({plain : true})
    })
    
    return response.render("highscores", {highscores})
  }catch(error){
    return response.status(500).json(error)
  }
})

module.exports = router