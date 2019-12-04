const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('serveu', 'root', 'icecream2@W', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});