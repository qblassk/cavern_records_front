'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('users', {
         id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
         name: Sequelize.STRING,
         email: Sequelize.STRING,
         password: Sequelize.STRING,
         avatar: Sequelize.STRING,
         phone: Sequelize.INTEGER,
         adress: Sequelize.STRING,
         type: Sequelize.STRING,
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
   },
};
