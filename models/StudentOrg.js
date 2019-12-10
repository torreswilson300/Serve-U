'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentOrg = sequelize.define('StudentOrg', {
    studentId: DataTypes.INTEGER,
    organizationId: DataTypes.INTEGER
  }, {});
  StudentOrg.associate = function(models) {
    // associations can be defined here
    StudentOrg.belongsTo(models.Organization, {foreignKey: 'organizationId'});
    StudentOrg.belongsTo(models.Student, {foreignKey: 'studentId'});
  };
  return StudentOrg;
};