'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    title: DataTypes.STRING,
    comment: DataTypes.STRING,
    organizationId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {});
  Feedback.associate = function(models) {
    // associations can be defined here
    Feedback.belongsTo(models.Organization, {foreignKey: 'organizationId'});
    Feedback.belongsTo(models.Student, {foreignKey: 'studentId'});
  };
  return Feedback;
};