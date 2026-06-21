const serviceModel =
require('../models/service.model');
async function getServices(req, res) {
try {

    const { id_service, id_provision } =
    req.query;

    let result;

    if (id_service) {

        result =
        await serviceModel
        .getServiceById(id_service);

    }
    else if (id_provision) {

        result =
        await serviceModel
        .getServicesByProvision(id_provision);

    }
    else {

        result =
        await serviceModel
        .getAllServices();
    }

    res.status(200).json(result);

}
catch(error) {

    console.error(error);

    res.status(500).json({
        message:
        'Error obteniendo servicios'
    });

}

}
module.exports = {
getServices
};