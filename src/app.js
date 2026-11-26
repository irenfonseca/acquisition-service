const express = require('express');
const acquisitionRoutes = require('./routes/acquisition.routes');

const app = express();

// Middleware para interpretar peticiones JSON
app.use(express.json());

// Registrar rutas
app.use('/', acquisitionRoutes);

module.exports = app;