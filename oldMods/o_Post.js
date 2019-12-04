// const Sequelize = require('sequelize');
// const db = require('../config/database');
// const model = require('./');

// const Post = db.define('Post', {
//   title: {
//     type: Sequelize.STRING
//   },
//   host: {
//     type: Sequelize.STRING
//   },
//   date: {
//     type: Sequelize.DATEONLY
//   },
//   start: {
//     type: Sequelize.TIME
//   },
//   end: {
//     type: Sequelize.TIME
//   },
//   hoursReceived: {
//     type: Sequelize.INTEGER
//   },
//   description: {
//     type: Sequelize.STRING
//   },
//   org: {
//     type: Sequelize.STRING
//   },
//   organizationId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: 'organizations',
//       key: 'id'
//     }
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
  
// });


//   // associations can be defined here
//   Post.belongsTo(model.Organization, {foreignKey: 'organizationId'});

//   module.exports = Post;