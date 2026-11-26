const express = require('express');
const controller = require('../controllers/acquisition.controller');

const router = express.Router();

// Comprobar el estado del microservicio
router.get('/health', controller.health);

// Adquirir y almacenar una nueva muestra
router.post('/samples', controller.createSample);

module.exports = router;