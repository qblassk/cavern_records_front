'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('orders', {
         id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
         user_id: Sequelize.INTEGER,
         orderDate: Sequelize.DATE,
         product_id: Sequelize.INTEGER,
         total: Sequelize.FLOAT,
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('orders');
   },
};
