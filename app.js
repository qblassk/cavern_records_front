const express = require('express');
const path = require('path');

const mainRoutes = require('./router/mainRoutes');

const app = express();

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/', mainRoutes);

const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => console.log('Server running on port' + ' ' + APP_PORT));

module.exports = app;
