'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentPost = sequelize.define('studentPost', {
    StudentId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    hours: DataTypes.INTEGER
  }, {});
  StudentPost.associate = function(models) {
    // associations can be defined here
    StudentPost.belongsTo(models.Post, {foreignKey: 'postId'});
    StudentPost.belongsTo(models.Student, {foreignKey: 'studentId'});
  };
  return StudentPost;
};