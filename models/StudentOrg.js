'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentOrg = sequelize.define('studentOrg', {
    studentId: DataTypes.INTEGER,
    organizationId: DataTypes.INTEGER
  }, {});
  studentOrg.associate = function(models) {
    // associations can be defined here
  };
  return studentOrg;
};