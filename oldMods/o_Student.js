// const Sequelize = require('sequelize');
// const db = require('../config/database');
// var bcrypt = require('bcrypt');

// const Student = db.define('student', {
//   username: {
//     type: Sequelize.STRING
//   },
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   },
//   email: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   hoursCompleted: {
//     type: Sequelize.INTEGER
//   },
//   hoursAttempted: {
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
// });
// Student.associate = function(models) {
//   // associations can be defined here
//   Student.belongsToMany(models.Organization, {
//     through:'studentOrgs',
//     foreignKey: 'studentId',
//     as: 'organization'
//   });
// };


// Student.beforeCreate((student, options) => {
//   const salt = bcrypt.genSaltSync();
//   student.password = bcrypt.hashSync(student.password, salt);
// });
  
 
// Student.prototype.validPassword = function(password) {
//         return bcrypt.compareSync(password, this.password);
//       }; 
//   module.exports = Student;