'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentPost = sequelize.define('studentPost', {
    studentId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    hours: DataTypes.INTEGER
  }, {});
  studentPost.associate = function(models) {
    // associations can be defined here
  };
  return studentPost;
};