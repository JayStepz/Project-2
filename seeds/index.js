const sequelize = require('../config');
const product = require('../models/product');
const product_data = require('./products.json');

async function seed_database(){
  await sequelize.sync({force : true})
  
  await product.bulkCreate(product_data, {
    individualHooks : true,
    returning : true
  })
  
  console.log("Seeded successfully!")
  
  process.exit(0)
}

seed_database()