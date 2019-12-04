'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    username: DataTypes.STRING,
    orgName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    numOfMembers: DataTypes.INTEGER,
    numOfPost: DataTypes.INTEGER
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.Post);
    Organization.belongsToMany(models.Student, {
      through:'studentOrgs',
      foreignKey: 'organizationId',
      as: 'student'
    });
  };
  Organization.beforeCreate((organizaton, options) => {
    const salt = bcrypt.genSaltSync();
    organizaton.password = bcrypt.hashSync(organizaton.password, salt);
  });
    
   
  Organization.prototype.validPassword = function(password) {
          return bcrypt.compareSync(password, this.password);
        }; 
        
  return Organization;
};