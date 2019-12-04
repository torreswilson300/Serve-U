// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const StudentOrg = db.define('studentOrg', {
//   studentId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: 'students',
//       key: 'id'
//     }
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
//   }
// });
// StudentOrg.associate = function(models) {
//   // associations can be defined here
//   StudentOrg.belongsTo(models.Organization, {foreignKey: 'organizationId'});
//   StudentOrg.belongsTo(models.Student, {foreignKey: 'studentId'});
// };

//   module.exports = StudentOrg;