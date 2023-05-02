const router = require("express").Router()
const user_routes = require("./userRoutes")

router.use("/users", user_routes)

module.exports = router