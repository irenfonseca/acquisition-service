const kunnaService = require(
    '../services/kunna.service'
);

const sampleService = require(
    '../services/sample.service'
);

function health(req, res) {

    res.status(200).json({
        status: 'ok',
        service: 'acquisition-service'
    });
}

async function createSample(req, res) {

    try {

        // Obtener las features
        const features = await kunnaService.getFeatures();

        // Almacenar la muestra
        const sample = await sampleService.saveSample(features);

        // Construir la respuesta según el contrato
        res.status(201).json({
            dataId: sample._id,
            features: sample.features,
            featureCount: sample.featureCount,
            createdAt: sample.createdAt
        });

    } catch (error) {

        if (error.code === 'NOT_IMPLEMENTED') {
            return res.status(501).json({
                message: error.message
            });
        }

        console.error(error);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

module.exports = {
    health,
    createSample
};