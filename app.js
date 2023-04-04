// ----- Importo express y lo guardo en una constante ------------------------------------------------------------------------------------------------ //
const express = require('express');
// ----- Importo path y lo guardo en una constante --------------------------------------------------------------------------------------------------- //
const path = require('path');
// ----- Importo cookieparser y lo guardo en una constante ------------------------------------------------------------------------------------------- //
const cookieParser = require('cookie-parser');


//const session = require('express-session');
//const methodOverrride = require('method-override');


// ----- Importo las rutas del main y lo guardo en una constante ------------------------------------------------------------------------------------- //
const mainRoutes = require('./router/mainRoutes')

//const productsRoutes = require('./routes/productsRoutes');
//const userRoutes = require('./routes/userRoutes');

// ----- Instancia de express ------------------------------------------------------------------------------------------------------------------------ //
const app = express();

//app.use(methodOverrride('_method'));

// ----- Guardo en una constante la ruta de la carpeta public, y le indico a express que la utilice como estatica ------------------------------------ //
const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

// ----- VERRRRRRRRRRRRRRRRRR ------------------------------------------------------------------------------------------------------------------------ //
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// ----- Establezco EJS como motor de vistas dinamico ------------------------------------------------------------------------------------------------ //
app.set('view engine', 'ejs');

// ----- Enlazo el sufijo con sus respectivas rutas -------------------------------------------------------------------------------------------------- //
app.use('/', mainRoutes);
//app.use('/products', productsRoutes);
//app.use('/user', userRoutes);

// ----- Guardo el puerto que voy a utilizar en una constante y se lo indico a express --------------------------------------------------------------- //
const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () =>
    console.log('Server running on port'+ ' ' + APP_PORT));

// ----- Exporto el modulo --------------------------------------------------------------------------------------------------------------------------- //
module.exports = app;

