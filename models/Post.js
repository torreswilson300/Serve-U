'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    host: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    start: DataTypes.TIME,
    end: DataTypes.TIME,
    hoursReceived: DataTypes.INTEGER,
    description: DataTypes.STRING,
    org: DataTypes.STRING,
    organizationId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Organization, {foreignKey: 'organizationId'});

    Post.belongsToMany(models.Student, {
      through:'studentPosts',
      foreignKey: 'postId',
      as: 'student'
  })

  };
  return Post;
};