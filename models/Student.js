'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password: DataTypes.STRING,
    hoursCompleted: DataTypes.INTEGER,
    hoursAttempted: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.hasMany(models.Feedback);
    Student.belongsToMany(models.Organization, {
    through:'studentOrgs',
    foreignKey: 'studentId',
    as: 'organization'}),

    Student.belongsToMany(models.Post, {
      through:'studentPosts',
      foreignKey: 'studentId',
      as: 'post'
  })
  };

  Student.beforeCreate((student, options) => {
    const salt = bcrypt.genSaltSync();
    student.password = bcrypt.hashSync(student.password, salt);
  });
    
  Student.prototype.validPassword = function(password) {
          return bcrypt.compareSync(password, this.password);
        };
  return Student;
};