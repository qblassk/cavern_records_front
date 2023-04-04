'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('products', {
         id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
         album: Sequelize.STRING,
         date: Sequelize.DATE,
         artist_id: Sequelize.INTEGER,
         image: Sequelize.STRING,
         price: Sequelize.FLOAT,
         discount: Sequelize.FLOAT,
         delivery: Sequelize.STRING,
         status: Sequelize.STRING,
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('products');
   },
};
