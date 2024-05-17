'use strict';
const config = require('../../config/config')
const { dialect } = config.env === 'development' ? config.development : config.production

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = dialect === 'mysql' ? Sequelize.fn('CURRENT_TIMESTAMP') : 'CURRENT_TIMESTAMP'

    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: now,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: now,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};