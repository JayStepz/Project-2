const { User, Product, Order } = require('/models');
const faker = require('faker');

const seedDatabase = async () => {
    const users = await User.bulkCreate([
      { name: 'Alice', email: 'alice@example.com', password: 'password1' },
      { name: 'Bob', email: 'bob@example.com', password: 'password2' },
      { name: 'Charlie', email: 'charlie@example.com', password: 'password3' },
    ]);
  
    const products = await Product.bulkCreate([
      { name: 'Product 1', description: 'Description 1', price: 10.99, image_url: 'http://example.com/image1.jpg', quantity: 100 },
      { name: 'Product 2', description: 'Description 2', price: 20.99, image_url: 'http://example.com/image2.jpg', quantity: 50 },
      { name: 'Product 3', description: 'Description 3', price: 30.99, image_url: 'http://example.com/image3.jpg', quantity: 25 },
    ]);
  
    const orders = await Order.bulkCreate([
      { user_id: users[0].id, product_id: products[0].id, quantity: 1, price: products[0].price },
      { user_id: users[1].id, product_id: products[1].id, quantity: 2, price: products[1].price * 2 },
      { user_id: users[2].id, product_id: products[2].id, quantity: 3, price: products[2].price * 3 },
    ]);
  };
  
  seedDatabase()
  .then(() => console.log('Database seeded successfully.'))
  .catch((error) => console.error('Unable to seed database:', error));
