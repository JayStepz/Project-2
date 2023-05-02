// Libraries
const sequelize = require("sequelize")

function main(){
  require("dotenv").config()
  
  return (
    process.env.JAWSDB_URL ?
    new sequelize(process.env.JAWSDB_URL):
    new sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306
      }
    )
  )
}

module.exports = main()