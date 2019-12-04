'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      host: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      start: {
        type: Sequelize.TIME
      },
      end: {
        type: Sequelize.TIME
      },
      hoursReceived: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      org: {
        type: Sequelize.STRING
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'organizations',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};