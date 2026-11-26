const Sample = require('../models/sample.model');

async function saveSample(sampleData) {

    // TODO 1: Almacenar la muestra en MongoDB.
    const sample = await Sample.create(sampleData);

    // TODO 2: Devolver el documento almacenado.
    return sample;
}

module.exports = {
    saveSample
};