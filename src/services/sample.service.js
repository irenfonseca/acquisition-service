const Sample = require('../models/sample.model');

async function saveSample(features) {

    // TODO: Almacenar las features en MongoDB.

    const error = new Error(
        'Sample persistence is not implemented'
    );

    error.code = 'NOT_IMPLEMENTED';

    throw error;
}

module.exports = {
    saveSample
};