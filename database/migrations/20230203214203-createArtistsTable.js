'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('artists', {
         id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
         name: Sequelize.STRING,
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('artists');
   },
};
