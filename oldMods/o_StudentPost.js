// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const StudentPost = db.define('studentOrg', {
//   studentId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: 'students',
//       key: 'id'
//     }
//   },
//   postId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: 'posts',
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
//   }
// });
// StudentPost.associate = function(models) {
//   // associations can be defined here
//   StudentPost.belongsTo(models.Post, {foreignKey: 'postId'});
//   StudentPost.belongsTo(models.Student, {foreignKey: 'studentId'});
// };

//   module.exports = Student
// Post;