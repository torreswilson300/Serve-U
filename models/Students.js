const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'students',
  {
    UserID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: Sequelize.CHAR
    },
    FirstName: {
      type: Sequelize.CHAR
    },
    LastName: {
      type: Sequelize.CHAR
    },
    Email: {
      type: Sequelize.CHAR
    },
    Password: {
      type: Sequelize.CHAR
    },
    HoursServed: {
      type: Sequelize.INTEGER
    },
    AccountType: {
      type: Sequelize.CHAR
    }
  },{timestamps: false}
)
