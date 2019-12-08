'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('feedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'organizations',
          key: 'id'
        }
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
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
    return queryInterface.dropTable('feedbacks');
  }
};