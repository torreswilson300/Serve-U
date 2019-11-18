const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'Organizations',
  {
    OrgId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: Sequelize.CHAR
    },
    OrgName: {
      type: Sequelize.CHAR
    },
    Email: {
      type: Sequelize.CHAR
    },
    Password: {
      type: Sequelize.CHAR
    },
    Description: {
      type: Sequelize.TEXT
    },
    NumOfMembers: {
      type: Sequelize.INTEGER
    },
    NumOfPost: {
      type: Sequelize.INTEGER
    },
    AccountType: {
      type: Sequelize.CHAR
    }
  },{timestamps: false}
)
