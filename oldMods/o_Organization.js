// const Sequelize = require('sequelize');
// const db = require('../config/database');
// var bcrypt = require('bcrypt');
// const model = require('./');

// const Organization = db.define('Organization', {
//   username: {
//     type: Sequelize.STRING
//   },
//   orgName: {
//     type: Sequelize.STRING
//   },
//   email: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   description: {
//     type: Sequelize.STRING
//   },
//   numOfMembers: {
//     type: Sequelize.INTEGER
//   },
//   numOfPost: {
//     type: Sequelize.INTEGER
//   },
//   createdAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   },
//   updatedAt: {
//     allowNull: false,
//     type: Sequelize.DATE
//   }
//   })
//     // associations can be defined here
//     Organization.hasMany(model.Post);
//     Organization.belongsToMany(model.Student, {
//       through:'studentOrgs',
//       foreignKey: 'organizationId',
//       as: 'student'
//     });


//   Organization.beforeCreate((organizaton, options) => {
//     const salt = bcrypt.genSaltSync();
//     organizaton.password = bcrypt.hashSync(organizaton.password, salt);
//   });
    
   
//   Organization.prototype.validPassword = function(password) {
//           return bcrypt.compareSync(password, this.password);
//         }; 
  
//   module.exports = Organization;

