// Libraries
const path = require("path")
const express = require("express")
const session = require("express-session")
const express_handlebars = require("express-handlebars")
const sequelize_store = require("connect-session-sequelize")(session.Store)

// File Paths
const routes = require("./controllers")
const helpers = require("./utils")
const sequelize = require("./config/connection")

// Constants
const app = express()

const handlebars = express_handlebars.create({helpers})

const sess = {
  secret: "Waffles!",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new sequelize_store({
    db: sequelize
  })
}

// Actions
app.use(session(sess))

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

sequelize.sync({ force: false }).then(function(){
  app.listen(process.env.PORT || 3001, function(){
    console.log('Now listening')
  })
})