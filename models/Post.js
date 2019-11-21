const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'posts',
  {
    PostID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Headline: {
      type: Sequelize.CHAR
    },
    Host: {
      type: Sequelize.CHAR
    },
    Date: {
      type: Sequelize.DATEONLY
    },
    StartTime: {
      type: Sequelize.TIME
    },
    EndTime: {
      type: Sequelize.TIME
    },
    HoursReceived: {
      type: Sequelize.INTEGER
    },
    Description: {
      type: Sequelize.STRING
    },
    Url: {
      type: Sequelize.CHAR
    }
  },{timestamps: false}
)