const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/productsAll.json');
const productsAll = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 


const controller = {
    home : (req, res)=>{        
        return res.render('home', {productsAll});  
    },

    panel : (req, res) => {
        return res.render('panel');
    },

   /*  register : (req, res) => {
        return res.render('register');
    },
    login : (req, res) => {
        return res.render('login');
    },
    profile : (req, res) => {
        return res.render('userProfile');
    },
    productCart : (req, res) => {
        return res.render('productCart');
    },
    productDetail : (req, res) => {
        return res.render('productDetail');
    },
    contacto : (req, res) => {
        return res.render('contacto');
    },
    nosotros : (req, res) => {
        return res.render('nosotros');
    },
    productDetailMain : (req, res) => {
        return res.render('productDetailMain');
    },
    
    edit : (req,res) => {
        return res.render('edit');
    } */
}
module.exports = controller;