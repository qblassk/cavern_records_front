const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/productsAll.json');
const productsAll = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
   home: (req, res) => {
      return res.render('home', { productsAll });
   },

   panel: (req, res) => {
      return res.render('panel');
   },
};
module.exports = controller;
