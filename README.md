# E-Shop App
Make a generic store app.

# Collaborators
* Chris Bailey

## Notes
Let users create and log into accounts.
Store user and product info within a database.
Pull products from a database.
Order confirmation after checkout
Time-based integration (same-day shipping offer?/time stamp orders?)
Customer/Order memory
Look into on demand loading, infinite scrolling, pagination
Tiny.png for image re-sizing
New Tech: TypeScript

## Layout
Home Page
Categorized Pages
Individual product pages? Pop-out modals?
Shopping Cart page
Log-in page/Account create
Check-out page

## Database
Database itself

Product Table
- id
- name
- price
- stock
    - amount
    - inStock
- cat_id

Customer Table
- id
- username
- pass
- email
- order(s)

Order Table
- id
- contents
- timestamp

## Backend Notes
Server.js

config folder
- connection.js

database folder
- schema.sql
    - DROP DATABASE IF EXISTS
    - CREATE DATABASE

seeds folder
- product images folder
    - images
- product seeds
    - seed.js
    - productData.json
    - userData.json

models folder
- User.js
- Product.js
- Order.js

routes folder
- homepage.js
    - Get route "/" to storefront
- category.js
    - Get route "/category/:id"
- product.js
    - Get route "/product/:id"
- log_in.js
    - Get route "/log_in"
- cart.js
    - Get route "/cart"
- checkout.js
    - Get route "/cart/checkout"

handlebars folder
- main.handlebars
- category.handlebars
- product.handlebars
- log_in.handlebars
- cart.handlebars
- checkout.handlebars

public folder
- css files

utils folder
- auth.js / log-in and account creation
- id_gen.js / generate confirmation number and order number
- process.js / verify stock, process order, conf on good stock, reject on lack of stock